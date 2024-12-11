import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';
import { Result } from 'postcss';

const DATABASE = process.env.MONGODB_DB_NAME;

export const getApplications = async (userId: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const APPLICATIONS_COLLECTION = "Applications"
    const rawApplications = await db
        .collection(APPLICATIONS_COLLECTION)
        .find({ userId })
        .toArray();
    const applicationsWithDetails = await Promise.all(
        rawApplications.map(async app => {
            const APPLICATIONS_TYPE_COLLECTION = "ApplicationTypes"
            const applicationType = await db
                .collection(APPLICATIONS_TYPE_COLLECTION)
                .findOne({ _id: app.applicationTypeId });

            return {
                id: app._id,
                name: app.name,
                type: applicationType,
                createAt: app.createdAt,
                updatedAt: app.updatedAt
            };
        })
    );
    return applicationsWithDetails;
};

export const getApplicationTypes = async () => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const rawApplicationTypes = await db
        .collection("ApplicationTypes")
        .find()
        .toArray();
    return rawApplicationTypes.map(type => ({
        id: type._id,
        name: type.name,
        createdAt: type.createdAt,
        updatedAt: type.updatedAt
    }));
}

export const getApplicationTasks = async (applicationId: string, applicationTypeId: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const APPLICATION_TYPES_COLLECTION = "ApplicationTypes"
    const rawApplicationTypes = await db
        .collection(APPLICATION_TYPES_COLLECTION)
        .findOne({ _id: new ObjectId(applicationTypeId) });

    if (!rawApplicationTypes) {
        return null;
    }

    type ApplicationStage = {
        name: string;
        applicationTasks: ObjectId[];
    }

    console.log('🚀');

    const APPLICATION_TASKS_COLLECTION = "ApplicationTasks"
    const result: Record<string, any[]> = {};
    for (const stage of rawApplicationTypes.applicationStages) {
        const stageTasks = await Promise.all(
            stage.applicationTasks.map(async (taskId: ObjectId) => {
                const taskInfo = await db
                    .collection(APPLICATION_TASKS_COLLECTION)
                    .findOne({ _id: taskId });
                console.log('❤️', taskInfo);

                if (!taskInfo) {
                    return null;
                }
                
                const taskDetail = await db
                    .collection("ApplicationTaskDetails")
                    .findOne({ applicationId: new ObjectId(applicationId), applicationTaskId: new ObjectId(taskInfo?._id) });
                console.log('🎉', taskDetail);

                if (!taskDetail) {
                    return null;
                }

                const APPLICATION_COMMENT_COLLECTION = "ApplicationComments"
                const rawComments = await db
                    .collection(APPLICATION_COMMENT_COLLECTION)
                    .find({ applicationTaskDetailId: taskDetail?._id })
                    .toArray();
                console.log('🎊', rawComments);
    
                const comments = await Promise.all(
                    rawComments.map(async comment => {
                        const USERS_COLLECTION = "Users"
                        const user = await db
                            .collection(USERS_COLLECTION)
                            .findOne({ userId: comment.senderId });
    
                        return {
                            id: comment._id,
                            user: user,
                            content: comment.content,
                            createdAt: comment.date,
                        };
                    })
                )

                return {
                    id: taskDetail._id,
                    name: taskInfo.name,
                    description: taskInfo.description,
                    status: taskDetail.status,
                    dueDate: taskDetail.dueDate,
                    comments: comments,
                    documentURLs: taskInfo.documents,
                    createdAt: taskDetail.createdAt,
                    updatedAt: taskDetail.updatedAt
                };
            })
        );

        result[stage.name] = stageTasks.filter(task => task !== null);
    };
    
    return result;
}

export const updateApplicationStatus = async (taskId: string, status: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const APPLICATION_TASK_DETAILS_COLLECTION = "ApplicationTaskDetails"

    await db
        .collection(APPLICATION_TASK_DETAILS_COLLECTION)
        .updateOne(
            { _id: new ObjectId(taskId) },
            { $set: { status: status } }
        )
}
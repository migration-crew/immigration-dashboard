import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb';

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

export const getApplicationTasks = async (applicationId: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const APPLICATION_TASK_DETAILS_COLLECTION = "ApplicationTaskDetails"
    const rawTaskDetails = await db
        .collection(APPLICATION_TASK_DETAILS_COLLECTION)
        .find({ applicationId: new ObjectId(applicationId) })
        .toArray();
    const tasks = await Promise.all(
        rawTaskDetails.map(async task => {
            const APPLICATION_TASKS_COLLECTION = "ApplicationTasks"
            const taskInfo = await db
                .collection(APPLICATION_TASKS_COLLECTION)
                .findOne({ _id: task.applicationTaskId });

            if (!taskInfo) {
                return null;
            }

            const APPLICATION_COMMENT_COLLECTION = "ApplicationComments"
            const rawComments = await db
                .collection(APPLICATION_COMMENT_COLLECTION)
                .find({ applicationTaskDetailId: task._id })
                .toArray();

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
                id: task._id,
                name: taskInfo.name,
                description: taskInfo.description,
                status: task.status,
                dueDate: task.dueDate,
                comments: comments,
                documentURLs: taskInfo.documents,
                createdAt: task.createdAt,
                updatedAt: task.updatedAt
            };
        })
    );
    return tasks.filter(task => task !== null);
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
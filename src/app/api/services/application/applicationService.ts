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
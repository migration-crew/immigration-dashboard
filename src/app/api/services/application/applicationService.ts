import clientPromise from '../../lib/mongodb';

const DATABASE = "Dashboard"
const COLLECTION = "Applications"

export const getApplications = async (userId: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const rawApplications = await db
            .collection(COLLECTION)
            .find({ userId })
            .toArray();
    return rawApplications.map(app => ({
        id: app._id,
        name: app.name,
        type: app.applicationTypeId,
        createAt: app.createdAt,
        updatedAt: app.updatedAt
    }));
};
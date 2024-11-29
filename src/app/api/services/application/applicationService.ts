import clientPromise from '../../lib/mongodb';

const DATABASE = "Dashboard"
const COLLECTION = "Applications"

export const getApplications = async (userId: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const applications = await db
            .collection(COLLECTION)
            .find({ userId })
            .toArray();
    return applications;
};
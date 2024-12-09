import clientPromise from '../../lib/mongodb';

const DATABASE = process.env.MONGODB_DB_NAME;

export const getUser = async (userId: string) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const USERS_COLLECTION = "Users"
    const user = await db
        .collection(USERS_COLLECTION)
        .findOne({ userId: userId });
    
    if (!user) {
        return null;
    }

    return {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        nationality: user.nationality,
        language: user.language,
        address: user.address,
        birthOfDate: user.birthOfDate,
        gender: user.gender,
        email: user.email,
        imageURL: user.imageURL,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    };
};
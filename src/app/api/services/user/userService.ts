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

export type NewUserInfo = {
    firstName?: string;
    lastName?: string;
    nationality?: string;
    language?: string;
    address?: string;
    dateOfBirth?: string;
    gender?: string;
    email?: string;
    imageURL?: string;
}

export const updateUser = async (userId: string, user: NewUserInfo) => {
    const client = await clientPromise;
    const db = client.db(DATABASE);
    const USERS_COLLECTION = "Users"
    const updateData: Record<string, unknown> = {};
    if (user.firstName !== undefined) updateData.firstName = user.firstName;
    if (user.lastName !== undefined) updateData.lastName = user.lastName;
    if (user.nationality !== undefined) updateData.nationality = user.nationality;
    if (user.language !== undefined) updateData.language = user.language;
    if (user.address !== undefined) updateData.address = user.address;
    if (user.dateOfBirth !== undefined) updateData.dateOfBirth = user.dateOfBirth;
    if (user.gender !== undefined) updateData.gender = user.gender;
    if (user.email !== undefined) updateData.email = user.email;
    if (user.imageURL !== undefined) updateData.imageURL = user.imageURL;

    await db
        .collection(USERS_COLLECTION)
        .updateOne(
            { userId: userId },
            { $set: updateData }
        );
}
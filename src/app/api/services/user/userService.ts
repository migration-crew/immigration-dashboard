import dbConnect from "../../lib/mongoose";
import User from "../../schemas/user/user.schema";

export const getUser = async (userId: string) => {
  await dbConnect();
  const user = await User.findOne({ userId });

  if (!user) {
    return null;
  }

  return user;
};

// export type NewUserInfo = {
//     firstName?: string;
//     lastName?: string;
//     nationality?: string;
//     language?: string;
//     address?: string;
//     dateOfBirth?: string;
//     gender?: string;
//     email?: string;
//     imageURL?: string;
// }

// export const updateUser = async (userId: string, user: NewUserInfo) => {
//     const client = await clientPromise;
//     const db = client.db(DATABASE);
//     const USERS_COLLECTION = "Users"
//     const updateData: Record<string, unknown> = {};
//     if (user.firstName !== undefined) updateData.firstName = user.firstName;
//     if (user.lastName !== undefined) updateData.lastName = user.lastName;
//     if (user.nationality !== undefined) updateData.nationality = user.nationality;
//     if (user.language !== undefined) updateData.language = user.language;
//     if (user.address !== undefined) updateData.address = user.address;
//     if (user.dateOfBirth !== undefined) updateData.dateOfBirth = user.dateOfBirth;
//     if (user.gender !== undefined) updateData.gender = user.gender;
//     if (user.email !== undefined) updateData.email = user.email;
//     if (user.imageURL !== undefined) updateData.imageURL = user.imageURL;

//     await db
//         .collection(USERS_COLLECTION)
//         .updateOne(
//             { userId: userId },
//             { $set: updateData }
//         );
// }

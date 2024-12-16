import User from "../schemas/user/user.schema";
import dbConnect from "./mongoose"

export const getUserId = async (clerkUserId: string) => {
    try {
        console.log('🚀', clerkUserId);
        await dbConnect();
        const user = await User.findOne({ userId: clerkUserId });

        if (!user) {
            throw new Error("User not found");
        }
        return user._id;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error(`Internal Server Error, Func: ${getUserId.name}`);
    }
}
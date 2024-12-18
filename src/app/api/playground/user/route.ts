import { NextResponse } from "next/server";
import dbConnect from "../../lib/mongoose";
import { UserType } from "../../types/user";
import User from "../../schemas/user/user.schema";

export async function POST(): Promise<NextResponse> {
  try {
    await dbConnect();
    const newUser: UserType = await User.create({
      userId: "user3",
      firstName: "Mihawk",
      lastName: "Dracule",
      nationality: "Romania",
      language: "Romanian",
      address: "random romanian address",
      dateOfBirth: "1997/3/9",
      gender: "male",
      email: "examplemihawl@gmail.com",
      imageURL: "https://imagesamplemihawk",
      role: "admin"
    });
    return NextResponse.json(newUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
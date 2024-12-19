export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  nationality: string;
  language: string;
  address: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  imageURL: string;
};

export type BasicUserType = UserType;
export type chatUserType = Pick<
  UserType,
  "_id" | "firstName" | "imageURL" | "lastName" | "email"
>;

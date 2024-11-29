export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  nationality: string;
  language: string;
  address: string;
  birthDate: string;
  gender: string;
  email: string;
  imageUrl: string;
};

export type BasicUserType = Pick<UserType, "id" | "firstName" | "imageUrl">;
export type ChatUserType = Pick<
  UserType,
  "id" | "firstName" | "lastName" | "email" | "imageUrl"
>;

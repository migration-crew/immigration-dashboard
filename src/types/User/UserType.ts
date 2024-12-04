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

<<<<<<< HEAD
export type BasicUserType = Pick<UserType, "id" | "firstName" | "imageUrl"> &
  Partial<Pick<UserType, "lastName">>;
=======
export type BasicUserType = Pick<UserType, "id" | "firstName" | "imageUrl">;
export type chatUserType = Pick<UserType, "id" | "firstName" | "imageUrl">;
>>>>>>> main

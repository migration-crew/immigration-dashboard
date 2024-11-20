export type User = {
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

export type BasicUser = Pick<User, "id" | "firstName" | "imageUrl">;

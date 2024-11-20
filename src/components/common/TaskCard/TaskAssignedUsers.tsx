import { User } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

type BasicUser = Pick<User, "id" | "firstName" | "imageUrl">;

type Props = {
  assignedUsers: BasicUser[];
};

export function TaskAssignedUsers({ assignedUsers }: Props) {
  return (
    <ul className="flex gap-1 items-center w-[100px] justify-end">
      {assignedUsers.map((user) => (
        <li key={user.id}>
          <Avatar>
            <AvatarImage src={user.imageUrl} alt={user.firstName} />
            <AvatarFallback>{user.firstName}</AvatarFallback>
          </Avatar>
        </li>
      ))}
    </ul>
  );
}

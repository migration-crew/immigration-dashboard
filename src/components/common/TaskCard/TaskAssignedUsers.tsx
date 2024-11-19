import { user } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

type Props = {
  assignedUsers: user[];
};

export function TaskAssignedUsers({ assignedUsers }: Props) {
  return (
    <ul className="flex gap-1 items-center w-[100px] justify-end">
      {assignedUsers.map((user) => (
        <li key={user._id}>
          <Avatar>
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
        </li>
      ))}
    </ul>
  );
}

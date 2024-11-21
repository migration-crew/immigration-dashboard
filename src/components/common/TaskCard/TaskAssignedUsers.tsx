import { ApplicationCommentType } from "@/types/Application/ApplicationCommentType";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

type Props = {
  comments: ApplicationCommentType[];
};

export function TaskAssignedUsers({ comments }: Props) {
  return (
    <ul className="flex gap-1 items-center w-[100px] justify-end">
      {comments.map((comment) => (
        <li key={comment.user.id}>
          <Avatar>
            <AvatarImage
              src={comment.user.imageUrl}
              alt={comment.user.firstName}
            />
            <AvatarFallback>{comment.user.firstName}</AvatarFallback>
          </Avatar>
        </li>
      ))}
    </ul>
  );
}

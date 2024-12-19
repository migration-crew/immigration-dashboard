import { ApplicationCommentType } from "@/types/Application/ApplicationCommentType";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

type Props = {
  comments?: ApplicationCommentType[];
};

export function TaskAssignedUsers({ comments }: Props) {
  return (
    <ul className="flex gap-1 items-center w-[100px] justify-end">
      {/* {comments.map((comment) => ( */}
        {/* <li key={comment.sender._id}> */}
          {/* <Avatar>
            <AvatarImage
              src={comment.sender.imageURL}
              alt={comment.sender.firstName}
            />
            <AvatarFallback>{comment.sender.firstName}</AvatarFallback>
          </Avatar> */}
        {/* </li> */}
      {/* ))} */}
    </ul>
  );
}

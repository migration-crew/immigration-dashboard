"use client";

import { Caption } from "@/components/common/text/Caption";
import { Microtext } from "@/components/common/text/Microtext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { MessageType } from "@/types/Inbox/MessageType";

const currentUserId = "userId";

type Props = {
  message: MessageType;
};

export default function ChatContainer({ message }: Props) {
  const isRight = message.user.id === currentUserId;
  const cardRight = isRight
    ? " bg-secondary-white rounded-bl-none"
    : "mt-0 mb-40px mr-0 ml-auto bg-secondary-green text-primary-white rounded-br-none";

  //   useEffect(() => {
  //     const getUserNameById = async () => {
  //       await getUsersById(message.userId)(
  //         (response: { name: SetStateAction<string> }[]) => {
  //           setName(response[0].name);
  //         }
  //       );
  //     };
  //     getUserNameById();
  //   }, []);

  return (
    <div className={`w-[846px] flex px-4 py-10`}>
      <div className="mx-0 mt-auto mb-0">
        {message.user.id === currentUserId && (
          <Avatar className="w-9 h-9 border-secondary-light-gray mr-[15px]">
            <AvatarImage src={message.user.imageUrl} alt={message.user.id} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        )}
      </div>
      <Card
        className={`max-w-[574px] m-1 p-[10px] w-fit break-words ${cardRight} `}
      >
        <Caption>{message.content}</Caption>
        <Microtext className="flex justify-end h-6">
          {message.createdAt}
        </Microtext>
      </Card>
    </div>
  );
}
// function useAuth(): { currentUser: unknown } {
//   throw new Error("Function not implemented.");
// }

// function getUsersById(userId: unknown) {
//   throw new Error("Function not implemented.");
// }

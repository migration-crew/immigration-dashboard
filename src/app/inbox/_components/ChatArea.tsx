"use client";

import { MessageType } from "@/types/Inbox/MessageType";
import ChatContainer from "./ChatContainer";

type Props = {
  messages: MessageType[];
};

export default function ChatArea({ messages }: Props) {
  const deleteMessage = (messageId: string) => {
    // メッセージを削除する処理をここに追加
    console.log("Deleting message with ID:", messageId);
  };

  const editMessage = (messageId: string) => {
    // メッセージを編集する処理をここに追加
    console.log("Editing message with ID:", messageId);
  };
  return (
    <div className="">
      {messages.map((message) => (
        <ChatContainer
          key={message._id}
          message={message}
          deleteMessage={deleteMessage}
          editMessage={editMessage}
        />
      ))}
    </div>
  );
}

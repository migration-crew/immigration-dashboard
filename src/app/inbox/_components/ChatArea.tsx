"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageType } from "@/types/Inbox/MessageType";
import { useState } from "react";
import ChatContainer from "./ChatContainer";

type Props = {
  msg: MessageType[];
};

export const ChatArea = ({ msg }: Props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>(msg);

  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  // メッセージ編集
  const handleEditMessage = (messageId: string) => {
    const messageToEdit = messages.find((msg) => msg._id === messageId);
    if (messageToEdit) {
      setMessage(messageToEdit.content); // 編集モードでメッセージ内容を設定
      setEditingMessageId(messageId); // 編集中のメッセージIDを設定
    }
  };

  // メッセージ保存（編集後）
  const handleSaveEdit = () => {
    if (editingMessageId && message !== "") {
      // FIXME: call hook here to update message later
      const updatedMessages = msg;

      // call hook here and make updated messages maybe need to call useEffect

      setMessages(updatedMessages); // 更新されたメッセージリストをセット
      setEditingMessageId(null); // 編集モードを終了
      setMessage(""); // 入力欄をリセット
    }
  };

  // メッセージ削除
  const handleDeleteMessage = (messageId: string) => {
    const updatedMessages = messages.filter((msg) => msg._id !== messageId);
    setMessages(updatedMessages); // 削除後のメッセージリストをセット
  };

  console.log("messages", messages);

  return (
    <div>
      <ScrollArea className="h-[723px]">
        <div className="">
          {messages.map((message) => (
            <ChatContainer
              key={message._id}
              message={message}
              editMessage={handleEditMessage}
              deleteMessage={handleDeleteMessage}
            />
          ))}
        </div>
      </ScrollArea>
      {/* <MessageComposer /> */}
    </div>
  );
};

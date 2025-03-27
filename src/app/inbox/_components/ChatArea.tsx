"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ScrollArea } from "@/components/ui/scroll-area";
import { patchAllMessages } from "@/hooks/patchAllMessages";
import { MessageType } from "@/types/Inbox/MessageType";
import { useEffect, useState } from "react";
import ChatContainer from "./ChatContainer";
import MessageComposer from "./MessageComposer";

type Props = {
  msg: MessageType[];
};

export const ChatArea = ({ msg }: Props) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>(msg);
  const [editMessage, setEditMessage] = useState<string | null>(null);

  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  // メッセージ編集
  const handleEditMessage = (messageId: string) => {
    const messageToEdit = messages.find((msg) => msg._id === messageId);
    if (messageToEdit) {
      setMessage(messageToEdit.content); // 編集モードでメッセージ内容を設定
      setEditingMessageId(messageId); // 編集中のメッセージIDを設定
    }
  };

  const setNewMessages = (newMessages: MessageType[]) => {
    setMessages(newMessages);
  };

  const setEditMessage = (newMessage: string) => {
    setEditMessage(newMessage);
  };

  useEffect(() => {
    const handleEdit = async () => {
      if (editingMessageId && message !== "") {
        const editMessages = await patchAllMessages(editingMessageId, message);
        setMessages(editMessages); // 更新されたメッセージリストをセット
      }
      setEditingMessageId(null); // 編集モードを終了
      setMessage(""); // 入力欄をリセット
    };
    handleEdit();
  }, []);

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
              setNewMessages={setNewMessages}
            />
          ))}
        </div>
      </ScrollArea>
      <MessageComposer
        messages={}
        setNewMessages={}
        editingMessageId={}
        setNewMessage={}
      />
    </div>
  );
};

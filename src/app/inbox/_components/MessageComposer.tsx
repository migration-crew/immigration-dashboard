"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/upImmigrationButton";
// import { CiImageOn } from "react-icons/ci";
// import { FaMicrophone } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
// import { GrAttachment } from "react-icons/gr";
// import { messages } from "@/app/playground/yui/data/message";
import { MessageType } from "@/types/Inbox/MessageType";
import { useState } from "react";

export default function MessageComposer() {
  const [message, setMessage] = useState<string>(""); // メッセージの状態
  const [messages, setMessages] = useState<MessageType[]>([]); // メッセージのリスト
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: MessageType = {
        _id: String(messages.length), // メッセージのID
        content: message,
        createdAt: new Date().toString(),
        user: {
          _id: "userId", // 現在のユーザーID
          imageURL: "",
          firstName: "",
          lastName: "",
          nationality: "",
          language: "",
          address: "",
          dateOfBirth: "",
          gender: "",
          email: "",
        },
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage(""); // 送信後、入力欄をリセット
    }
  };

  const handleSaveEdit = () => {
    if (editingMessageId && message.trim()) {
      const updatedMessages = messages.map((msg) =>
        msg._id === editingMessageId ? { ...msg, content: message } : msg
      );
      setMessages(updatedMessages); // メッセージを更新
      setEditingMessageId(null); // 編集モードを終了
      setMessage(""); // 入力欄をリセット
    }
  };

  return (
    <>
      <div className="w-[846px] h-[65px] border-t ">
        <Card className="p-[16px] rounded-t-none border-none shadow-none flex items-center justify-center">
          <div className="flex mr-[18px]">
            <button
              className="w-[24px] h-[24px] text-secondary-dark-gray flex items-center"
              aria-label="Start Voice Input"
            >
              {/* <FaMicrophone /> */}
            </button>
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write Message"
              className="border-none shadow-none w-[607px] h-[24px] focus-visible:ring-0"
            />
          </div>
          <Button
            onClick={editingMessageId ? handleSaveEdit : handleSendMessage} // 編集中か送信かで処理を分ける
            className="w-[86px] h-[33px] text-caption text-primary-white flex justify-center items-center"
            variant={"green"}
          >
            {editingMessageId ? "Save" : "Send"}
            <FiSend />
          </Button>
          {/* <button
            className="w-[24px] h-[24px] text-secondary-dark-gray flex justify-center items-center mr-4"
            aria-label="Start Voice Input"
          >
            <GrAttachment />
          </button> */}
          {/* <button
            className="w-[24px] h-[24px] text-secondary-dark-gray  flex justify-center items-center mr-4"
            aria-label="Start Voice Input"
          >
            <CiImageOn />
          </button>
          <Button
            onClick={handleSendMessage}
            className="w-[86px] h-[33px] text-caption text-primary-white flex justify-center items-center"
            variant={"green"}
          >
            Send
            <FiSend />
          </Button> */}
        </Card>
      </div>
    </>
  );
}

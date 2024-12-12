"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/upImmigrationButton";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import ChatContainer from "./ChatContainer";

export default function MessageComposer() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage("");
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
              <FaMicrophone />
            </button>
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write Message"
              className="border-none shadow-none w-[607px] h-[24px] focus-visible:ring-0"
            />
          </div>
          <button
            className="w-[24px] h-[24px] text-secondary-dark-gray flex justify-center items-center mr-4"
            aria-label="Start Voice Input"
          >
            <GrAttachment />
          </button>
          <button
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
          </Button>
        </Card>
      </div>
      <div className="mt-4">
        {messages.map((msg, index) => (
          <ChatContainer
            key={index}
            message={{
              id: "",
              user: { id: "userId", imageUrl: "", firstName: "" },
              content: msg,
              createdAt: new Date().toString(),
            }}
          />
        ))}
      </div>
    </>
  );
}

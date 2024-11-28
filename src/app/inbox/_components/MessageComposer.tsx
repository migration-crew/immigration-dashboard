"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";

export default function MessageComposer() {
  const [message, setMessage] = useState("");
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
              className="border-none shadow-none w-[607px] h-[24px]"
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
          <Button className="w-[86px] h-[33ps] text-caption  bg-secondary-green text-primary-white hover:bg-secondary-green-300 active:bg-green-200  flex justify-center items-center">
            Send
            <FiSend />
          </Button>
        </Card>
      </div>
    </>
  );
}

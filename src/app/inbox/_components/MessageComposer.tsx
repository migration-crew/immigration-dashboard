'use client';

import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/upImmigrationButton';
import { useState } from 'react';
// import { CiImageOn } from "react-icons/ci";
// import { FaMicrophone } from "react-icons/fa6";
import { FiSend } from 'react-icons/fi';
// import { GrAttachment } from "react-icons/gr";
import { MessageType } from '@/types/Inbox/MessageType';
import ChatContainer from './ChatContainer';

export default function MessageComposer() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<MessageType[]>([]);

  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: MessageType = {
        id: String(messages.length), // メッセージのID
        content: message,
        createdAt: new Date().toString(),
        user: {
          _id: 'userId', // 現在のユーザーID
          imageURL: '',
          firstName: '',
          lastName: '',
          nationality: '',
          language: '',
          address: '',
          dateOfBirth: '',
          gender: '',
          email: '',
        },
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage(''); // 送信後、入力欄をリセット
    }
  };

  // メッセージ編集
  const handleEditMessage = (messageId: string) => {
    const messageToEdit = messages.find((msg) => msg.id === messageId);
    if (messageToEdit) {
      setMessage(messageToEdit.content); // 編集モードでメッセージ内容を設定
      setEditingMessageId(messageId); // 編集中のメッセージIDを設定
    }
  };

  // メッセージ保存（編集後）
  const handleSaveEdit = () => {
    if (editingMessageId && message.trim()) {
      const updatedMessages = messages.map((msg) =>
        msg.id === editingMessageId ? { ...msg, content: message } : msg
      );
      setMessages(updatedMessages); // 更新されたメッセージリストをセット
      setEditingMessageId(null); // 編集モードを終了
      setMessage(''); // 入力欄をリセット
    }
  };

  // メッセージ削除
  const handleDeleteMessage = (messageId: string) => {
    const updatedMessages = messages.filter((msg) => msg.id !== messageId);
    setMessages(updatedMessages); // 削除後のメッセージリストをセット
  };

  return (
    <>
      <div className='h-[65px] border-t '>
        <Card className='p-4 rounded-t-none border-none shadow-none flex items-center justify-between'>
          <div className='flex mr-[18px]'>
            <button
              className='w-[24px] h-[24px] text-secondary-dark-gray flex items-center'
              aria-label='Start Voice Input'
            >
              {/* <FaMicrophone /> */}
            </button>
            <Input
              type='text'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Write Message'
              className='border-none shadow-none w-[607px] h-[24px] focus-visible:ring-0'
            />
          </div>
          <Button
            onClick={editingMessageId ? handleSaveEdit : handleSendMessage} // 編集中か送信かで処理を分ける
            className='w-[86px] h-[33px] text-caption text-primary-white flex justify-center items-center'
            variant={'green'}
          >
            {editingMessageId ? 'Save' : 'Send'}
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
      <div className='mt-4'>
        {messages.map((msg, index) => (
          <ChatContainer
            key={index}
            message={msg}
            deleteMessage={handleDeleteMessage}
            editMessage={handleEditMessage}
          />
          // <ChatContainer
          //   key={index}
          //   message={{
          //     id: String(index),
          //     user: {
          //       _id: "userId",
          //       imageURL: "",
          //       firstName: "",
          //       lastName: "",
          //       nationality: "",
          //       language: "",
          //       address: "",
          //       dateOfBirth: "",
          //       gender: "",
          //       email: "",
          //     },
          //     content: msg,
          //     createdAt: new Date().toString(),
          //   }}
          // />
        ))}
      </div>
    </>
  );
}

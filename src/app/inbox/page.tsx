"use client";
import ChatHeader from "@/app/inbox/_components/ChatHeader";
import ChatSideBar from "@/app/inbox/_components/ChatSideBar";
import NewChatModal from "@/app/inbox/_components/NewChatModal";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
import { chatsData } from "../playground/yui/data/chat";
import { messages } from "../playground/yui/data/message";
import { newChatUsers } from "../playground/yui/data/newChatModal";
import { ChatArea } from "./_components/ChatArea";
const page = async ({
  searchParams,
}: {
  searchParams: { messageId: string };
}) => {
  searchParams = await searchParams;
  const messageId = (await searchParams.messageId) || chatsData[0]._id;
  const currentChat = chatsData.find((d) => {
    return d._id === messageId;
  });
  if (!currentChat) {
    return <div>Error:Failed to find current chat</div>;
  }
  const title = currentChat.name;
  const links = [{ name: "Inbox", href: "/inbox" }];

  return (
    <PageContainer className="grid items-center">
      <div>
        <div className="flex justify-between mb-[18px] top-0">
          <BreadcrumbComponent links={links} className="flex items-center" />
          <NewChatModal users={newChatUsers} />
        </div>
        <div className="flex gap-2">
          <ChatSideBar chats={chatsData} />
          <div>
            <ChatHeader title={title} />
            <ChatArea msg={messages} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default page;

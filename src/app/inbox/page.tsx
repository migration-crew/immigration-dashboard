import ChatHeader from "@/app/inbox/_components/ChatHeader";
import ChatSideBar from "@/app/inbox/_components/ChatSideBar";
import NewChatModal from "@/app/inbox/_components/NewChatModal";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
// import { chatsData } from "../playground/yui/data/chat";
// import { messages } from "../playground/yui/data/message";
import { getAllChannels } from "@/hooks/getAllChannels";
import { getAllMessages } from "@/hooks/getAllMessages";
import { newChatUsers } from "../playground/yui/data/newChatModal";
import { ChatArea } from "./_components/ChatArea";

const page = async ({
  searchParams,
}: {
  searchParams: { channelId: string };
}) => {
  searchParams = await searchParams;
  const channels = await getAllChannels();
  const channelId =
    (await searchParams.channelId) ||
    channels.find((chat) => chat.users.length > 2)?._id ||
    channels[0]._id;

  const currentChat = channels.find((d) => {
    return d._id === channelId;
  });
  if (!currentChat) {
    return <div>Error:Failed to find current chat</div>;
  }
  const messages = await getAllMessages(channelId);
  // console.log("messages✌️✌️✌️", messages);

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
          <ChatSideBar chats={channels} />
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

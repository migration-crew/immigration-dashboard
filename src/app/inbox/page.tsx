import ChatContainer from "@/app/inbox/_components/ChatContainer";
import ChatHeader from "@/app/inbox/_components/ChatHeader";
import ChatSideBar from "@/app/inbox/_components/ChatSideBar";
import MessageComposer from "@/app/inbox/_components/MessageComposer";
import NewChatModal from "@/app/inbox/_components/NewChatModal";
import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { chatsData } from "../playground/yui/data/chat";
import { messages } from "../playground/yui/data/message";
import { newChatUsers } from "../playground/yui/data/newChatModal";
const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ messageId: string }>;
}) => {
  let { messageId } = await searchParams
  if(!messageId){
    messageId = chatsData.find((chat) => chat.users.length > 2)?._id ||
    chatsData[0]._id;

  }

  const currentChat = chatsData.find((d) => {
    return d._id === messageId;
  });
  if (!currentChat) {
    return <div>Error:Failed to find current chat</div>;
  }
  const title = currentChat.name;
  const links = [{ name: "Inbox", href: "/inbox" }];

  const deleteMessage = (messageId: string) => {
    // メッセージを削除する処理をここに追加
    console.log("Deleting message with ID:", messageId);
  }

  const editMessage = (messageId: string) => {
    // メッセージを編集する処理をここに追加
    console.log("Editing message with ID:", messageId);
  }

  return (
    <PageContainer className="grid items-center">
      <div>
        <div className="flex justify-between mb-[18px] top-0">
          <BreadcrumbComponent links={links} className="flex items-center" />
          <NewChatModal users={newChatUsers} />
        </div>
        <div className="flex gap-4">
          <ChatSideBar chats={chatsData} />
          <div className="flex-1">
            <ChatHeader title={title} />
            <ScrollArea className="h-[723px]">
              <div className="">
                {messages.map((message) => (
                  <ChatContainer key={message._id} message={message} deleteMessage={deleteMessage} editMessage={editMessage} />
                ))}
              </div>
            </ScrollArea>
            <MessageComposer />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default page;

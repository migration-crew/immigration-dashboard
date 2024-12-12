import ChatContainer from "@/app/inbox/_components/ChatContainer";
import ChatHeader from "@/app/inbox/_components/ChatHeader";
import ChatSideBar from "@/app/inbox/_components/ChatSideBar";
import MessageComposer from "@/app/inbox/_components/MessageComposer";
import NewChatModal from "@/app/inbox/_components/NewChatModal";
import Invoices from "@/app/payments/_components/Invoices";
import ProfileInput from "@/app/profile/_components/ProfileInput";
import { Applicationtable } from "@/components/common/ApplicationTable";
import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HorizontalProgressBar from "@/components/common/HorizontalProgressBar";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Badge } from "@/components/ui/upImmigrationBadge";
import { invoices } from "./data/invoice";

const page = () => {
  return (
    <div>
      <DynamicHeaderContainer
        headerChildren={<CaptionSemi>Visa Application</CaptionSemi>}
        className="w-[520px]"
        contentChildren={<HorizontalProgressBar progress={50} />}
      />
      <div>
        <Badge variant="green">Green</Badge>
        <Badge variant="red">Red</Badge>
        <Badge variant="blue">Blue</Badge>
        <Badge variant="gray">Gray</Badge>
      </div>
      <div>
        <Applicationtable
          applicationData={[
            {
              number: "001",
              name: "Application One",
              type: "Type A",
              progress: 50,
              status: "onHold",
            },
            {
              number: "002",
              name: "Application Two",
              type: "Type B",
              progress: 0,
              status: "completed",
            },
          ]}
        />
      </div>
      <div className="flex">
        <ChatSideBar
          chats={[
            {
              id: "0",
              name: "Saulo",
              members: [
                {
                  id: "0",
                  firstName: "Yuki",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "1",
                  firstName: "Zoro",
                  imageUrl: "https://github.com/shadcn.png",
                },
              ],
            },
            {
              id: "0",
              name: "Saulo2",
              members: [
                {
                  id: "0",
                  firstName: "Yuki",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "1",
                  firstName: "Zoro",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "1",
                  firstName: "Zoro",
                  imageUrl: "https://github.com/shadcn.png",
                },
              ],
            },
            {
              id: "0",
              name: "Saulo3",
              members: [
                {
                  id: "0",
                  firstName: "Yuki",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "1",
                  firstName: "Zoro",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "0",
                  firstName: "Yuki",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "1",
                  firstName: "Zoro",
                  imageUrl: "https://github.com/shadcn.png",
                },
              ],
            },
            {
              id: "0",
              name: "Saulo4",
              members: [
                {
                  id: "0",
                  firstName: "Yuki",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "1",
                  firstName: "Zoro",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "0",
                  firstName: "Yuki",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "1",
                  firstName: "Zoro",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "0",
                  firstName: "Yuki",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "1",
                  firstName: "Zoro",
                  imageUrl: "https://github.com/shadcn.png",
                },
              ],
            },
            {
              id: "0",
              name: "Saulo5",
              members: [
                {
                  id: "0",
                  firstName: "Yuki",
                  imageUrl: "https://github.com/shadcn.png",
                },
                {
                  id: "1",
                  firstName: "Zoro",
                  imageUrl: "https://github.com/shadcn.png",
                },
              ],
            },
          ]}
        />
        <div>
          <ChatHeader title={"All Student"} />
          <ChatContainer
            message={{
              id: "0",
              content: "Hello",
              createdAt: "5:20",
              user: {
                id: "userId",
                imageUrl: "https://github.com/shadcn.png",
                firstName: "Broock",
              },
            }}
          />
          <ChatContainer
            message={{
              id: "1",
              content: "Good bye",
              createdAt: "9:20",
              user: {
                id: "adminId",
                imageUrl: "https://github.com/shadcn.png",
                firstName: "Fruncky",
              },
            }}
          />
          <ChatContainer
            message={{
              id: "0",
              content:
                "oihosjdnvosdenvoisdenvoksndovnsodvnpsdknvopsiednvpoksndvolisndeboknselbjzn;dijrbodsjnbf;vojnsd;ofivn;oeksvn;osenv;ojnds;ojvn;dfojnb;ojdnf;bjovn;sdojnb;ovjsdn;vk;sodeinv;oinegw;rong;oiwegoinwe;okgnwoi;esgvibewsiugblvisedblviubeilgubewibgvijbdsjbgvlierbivueiuvnlisudnlivndlsinvlisndlivnlisdnvidsnbvilndsibn",
              createdAt: "10:20",
              user: {
                id: "userId",
                imageUrl: "https://github.com/shadcn.png",
                firstName: "Broock",
              },
            }}
          />
          <ChatContainer
            message={{
              id: "1",
              content:
                "ijokkkkkkkkkkkkkkookkokookasfkofokfodsjndsjidsjdjddjnsdjndndnsdnsvvdsnjnjsijdvjnsdvndvjndjnvndvjsndvdvanvnajdovdavdamvadamvahuuovdaodavdvahudvavadmuhdavmhdvavmavdaouhvmdhamvadouvdaovhadmovdhouvdauhovdahuvadhuvdhuavdahuvadouvdaohudvahuvodauhovuadhvadouhhoudvahdovavadhoovhdahvduaodvahuadovhovduahvdauhdvaoavdohvdaohumvhdaomvhdoavodhuahoavdudhovuvadhouvdahouadvhuovadhouavdohuadvhouavdhouvadhouvadhouvdahouavdhouvadhouvdaohvdahmovadohuvadohuvadohuvadhovadhouvadohuvadhuovadhouadvhohudvahouvdaohvadavdhoadvhouadvhuoadvohuavddva",
              createdAt: "11:20",
              user: {
                id: "adminId",
                imageUrl: "https://github.com/shadcn.png",
                firstName: "Fruncky",
              },
            }}
          />
          <MessageComposer />
        </div>
      </div>
      <NewChatModal
        users={[
          {
            id: "0",
            firstName: "Zoro",
            imageUrl: "https://github.com/shadcn.png",
            lastName: "Roronoa",
            email: "kmpkmpl@gmail.com",
          },
          {
            id: "1",
            firstName: "Nami",
            imageUrl: "https://github.com/shadcn.png",
            lastName: "Kobayashi",
            email: "vfaesvev@gmail.com",
          },
          {
            id: "2",
            firstName: "Usoppu",
            imageUrl: "https://github.com/shadcn.png",
            lastName: "Suzuki",
            email: "ipjonoisio@gmail.com",
          },
          {
            id: "3",
            firstName: "Robin",
            imageUrl: "https://github.com/shadcn.png",
            lastName: "Nico",
            email: "alcknojnocss@gmail.com",
          },
        ]}
      />
      <ProfileInput />
      <div>
        <Invoices
          invoiceData={invoices}
        />
      </div>
    </div>
  );
};

export default page;

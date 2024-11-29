import ChatContainer from "@/app/inbox/_components/ChatContainer";
import ChatHeader from "@/app/inbox/_components/ChatHeader";
import ChatSideBar from "@/app/inbox/_components/ChatSideBar";
import MessageComposer from "@/app/inbox/_components/MessageComposer";
import NewChatModal from "@/app/inbox/_components/NewChatModal";
import { Applicationtable } from "@/components/common/ApplicationTable";
import DynamicHeaderContainer from "@/components/common/DynamicHeaderContainer";
import HorizontalProgressBar from "@/components/common/HorizontalProgressBar";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Badge } from "@/components/ui/upImmigrationBadge";

const page = () => {
  return (
    <div className="bg-primary-gray w-full">
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
      <div>
        <ChatSideBar
          channels={["#All Client", "#Student Channel"]}
          messages={["Student_Project", "General_Project"]}
        />
        <ChatHeader title={"All Student"} />
        <ChatContainer
          message={{
            id: "0",
            content: "Hello",
            createdAt: "5:20",
            user: {
              id: "userId",
              imageUrl: "https://github.com/shadcn.png",
              firstName: "Frankcy",
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
              firstName: "Broock",
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
              firstName: "Frankcy",
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
              firstName: "Broock",
            },
          }}
        />
      </div>
      <MessageComposer />
      <NewChatModal
        users={[
          {
            id: "2",
            firstName: "Chopper",
            lastName: "Tony",
            email: "svbebe@gmail.com",
            imageUrl: "https://github.com/shadcn.png",
          },
        ]}
      />
    </div>
  );
};

export default page;

import { Caption } from "@/components/common/text/Caption";
import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Heading } from "@/components/common/text/Heading";
import { HeadingLight } from "@/components/common/text/HeadingLight";
import { HeadingSemi } from "@/components/common/text/HeadingSemi";
import { Hero } from "@/components/common/text/Hero";
import { HeroLight } from "@/components/common/text/HeroLight";
import { Microtext } from "@/components/common/text/Microtext";
import { MicrotextSemi } from "@/components/common/text/MicrotextSemi";
import { Paragraph } from "@/components/common/text/Paragraph";
import { ParagraphRegular } from "@/components/common/text/ParagraphRegular";
import { SubheadingLead } from "@/components/common/text/SubheadingLead";
import { SubheadingLeadLight } from "@/components/common/text/SubheadingLeadLight";
import { Subtitle } from "@/components/common/text/Subtitle";
import { SubtitleRegular } from "@/components/common/text/SubtitleRegular";
import { Title } from "@/components/common/text/Title";
import { TitleLight } from "@/components/common/text/TitleLight";
import { Button } from "@/components/ui/upImmigrationButton";

const YukiPage = () => {
  return (
    <div className="bg-primary-gray">
      <Hero>Hero</Hero>
      <HeroLight>HeroLight</HeroLight>
      <Title>Title</Title>
      <TitleLight>TitleLight</TitleLight>
      <Subtitle>Subtitle</Subtitle>
      <SubtitleRegular>SubtitleRegular</SubtitleRegular>
      <Heading>Heading</Heading>
      <HeadingSemi>HeadingSemi</HeadingSemi>
      <HeadingLight>HeadingLight</HeadingLight>
      <SubheadingLead>SubheadingLead</SubheadingLead>
      <SubheadingLeadLight>SubheadingLeadLight</SubheadingLeadLight>
      <Paragraph>Paragraph</Paragraph>
      <ParagraphRegular>ParagraphRegular</ParagraphRegular>
      <Caption>Caption</Caption>
      <CaptionSemi>CaptionSemi</CaptionSemi>
      <Microtext>Microtext</Microtext>
      <MicrotextSemi>MicrotextSemi</MicrotextSemi>

      <div className="border-task-red border-2 p-3">
        <Button>default</Button>
        <Button disabled>default disabled</Button>

        <Button variant="secondary">secondary</Button>
        <Button variant="secondary" disabled>
          secondary disabled
        </Button>
        <Button variant="green" className="">
          green
        </Button>
        <Button variant="green" disabled>
          green disabled
        </Button>
      </div>

      <div className="h-10 bg-primary-red bg-opacity-50">primary-red</div>
      <div className="h-10 bg-primary-black bg-opacity-50">primary-black</div>

      <div className="bg-amber-100">
        <div className="h-10 w-1/2 bg-primary-gray bg-opacity-50">primary-gray</div>
        <div className="h-10 w-1/2 bg-primary-white bg-opacity-50">primary-white</div>
      </div>

      <div className="h-10 bg-secondary-dark-gray bg-opacity-50">
        secondary-dark-gray
      </div>
      <div className="h-10 bg-secondary-medium-gray bg-opacity-50">
        secondary-medium-gray
      </div>
      <div className="h-10 bg-secondary-gray bg-opacity-50">secondary-gray</div>
      <div className="h-10 bg-secondary-light-gray bg-opacity-50">secondary-light-gray</div>
      <div className="h-10 bg-secondary-green bg-opacity-50">secondary-green</div>
      <div className="h-10 bg-secondary-blue bg-opacity-50">secondary-blue</div>
    </div>
  );
};

export default YukiPage;

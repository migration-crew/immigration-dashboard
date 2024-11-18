import { DynamicRoundedContainer } from "@/components/common/DynamicRoundedContainer";
import { PageContainer } from "@/components/common/PageContainer";
import { ParagraphRegular } from "@/components/common/text/ParagraphRegular";

export default function DavidPage() {
  return (
    <PageContainer>
      <h1 className="text-center text-blue-950 text-2xl font-bold m-3 ">
        David&apos;s playground
      </h1>
      <DynamicRoundedContainer
        title="This is a dynamic rounded container"
        className="flex flex-col gap-5"
      >
        <ParagraphRegular>hello h1</ParagraphRegular>
        <ParagraphRegular>hello h2</ParagraphRegular>
        <ParagraphRegular>hello h3</ParagraphRegular>
      </DynamicRoundedContainer>
    </PageContainer>
  );
}

import { Card, CardContent, CardHeader } from "../ui/card";

type Props = {
  headerChildren: React.ReactNode;
  contentChildren: React.ReactNode;
};

export default function DynamicHeaderContainer({
  headerChildren,
  contentChildren,
}: Props) {
  return (
    <>
      <Card className="w-[280px] rounded-2xl">
        <CardHeader className="bg-secondary-medium-gray text-primary-white rounded-t-2xl">
          {headerChildren}
        </CardHeader>
        <CardContent className="p-0">{contentChildren}</CardContent>
      </Card>
    </>
  );
}

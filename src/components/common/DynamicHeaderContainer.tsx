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
      <Card className="w-[280px] rounded-t-3xl">
        <CardHeader className="bg-secondary-medium-gray text-primary-white rounded-md">
          {headerChildren}
        </CardHeader>
        <CardContent>{contentChildren}</CardContent>
      </Card>
    </>
  );
}

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "../ui/card";

type Props = {
  headerChildren: React.ReactNode;
  contentChildren: React.ReactNode;
  className?: string | undefined;
};

export default function DynamicHeaderContainer({
  headerChildren,
  contentChildren,
  className,
}: Props) {
  return (
    <>
      <Card className={cn("w-[280px] rounded-2xl", className)}>
        <CardHeader className="bg-secondary-medium-gray text-primary-white rounded-t-2xl">
          {headerChildren}
        </CardHeader>
        <CardContent className="p-0">{contentChildren}</CardContent>
      </Card>
    </>
  );
}

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Paragraph } from "./text/Paragraph";

type Props = {
  title: string;
  children: React.ReactNode;
  className?: string | undefined;
  childrenDivClassName?: string | undefined;
};

/**
 * DynamicRoundedContainer
 * @param title: pass the title of the container
 * @param children: pass all elements that you want to render inside the container
 * @param className: (optional) pass all classes that you want to apply to the container
 * @param childrenDivClassName: (optional) pass all classes that you want to apply to the children div
 * @returns
 */

export function DynamicRoundedContainer({
  title,
  children,
  className,
  childrenDivClassName,
}: Props) {
  return (
    <Card className={cn(`rounded-lg bg-white p-6`, className)}>
      <Paragraph>{title}</Paragraph>
      <div className={`${childrenDivClassName}`}>{children}</div>
    </Card>
  );
}

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string | undefined;
};

/**
 * PageContainer
 * @param children: pass all elements that you want to render inside the page container
 * @param className: (optional) pass all classes that you want to apply to the page container
 * @returns
 */

export function PageContainer({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col gap-[18px] p-6 bg-primary-gray h-screen",
        className
      )}
    >
      {children}
    </div>
  );
}

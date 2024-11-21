import { cn } from "@/lib/utils";
import React from "react";

/**
 * titile-light Text
 * @remarks
 * Desktop: 40px, 300 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <TitleLight className='pb-4'>Take the Quiz</TitleLight>
 * ```
 */

export const TitleLight = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h2 className={cn("!text-title-light", className)}>{children}</h2>;
};
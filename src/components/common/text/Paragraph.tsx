import { cn } from "@/lib/utils";
import React from "react";

/**
 * paragraph Text
 * @remarks
 * Desktop: 16px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Paragraph className='pb-4'>Take the Quiz</Paragraph>
 * ```
 */

export const Paragraph = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("!text-paragraph", className)}>{children}</p>;
};
import { cn } from "@/lib/utils";
import React from "react";

/**
 * paragraph-regular Text
 * @remarks
 * Desktop: 16px, 400 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <ParagraphRegular className='pb-4'>Take the Quiz</ParagraphRegular>
 * ```
 */

export const ParagraphRegular = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("text-paragraph-regular", className)}>{children}</p>;
};
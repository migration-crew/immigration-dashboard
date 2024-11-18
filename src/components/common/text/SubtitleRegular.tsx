import { cn } from "@/lib/utils";
import React from "react";

/**
 * subtitle-regular Text
 * @remarks
 * Desktop: 32px, 400 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <SubtitleRegular className='pb-4'>Take the Quiz</SubtitleRegular>
 * ```
 */

export const SubtitleRegular = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h3 className={cn("text-subtitle-regular", className)}>{children}</h3>;
};
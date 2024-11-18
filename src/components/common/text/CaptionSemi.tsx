import { cn } from "@/lib/utils";
import React from "react";

/**
 * caption-semi Text
 * @remarks
 * Desktop: 14px, 600 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <CaptionSemi className='pb-4'>Take the Quiz</CaptionSemi>
 * ```
 */

export const CaptionSemi = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("text-caption-semi", className)}>{children}</p>;
};
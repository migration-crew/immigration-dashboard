import { cn } from "@/lib/utils";
import React from "react";

/**
 * caption Text
 * @remarks
 * Desktop: 14px, 400 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Caption className='pb-4'>Take the Quiz</Caption>
 * ```
 */

export const Caption = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("!text-caption", className)}>{children}</p>;
};
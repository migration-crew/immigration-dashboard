import { cn } from "@/lib/utils";
import React from "react";

/**
 * microtext-semi Text
 * @remarks
 * Desktop: 12px, 600 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <MicrotextSemi className='pb-4'>Take the Quiz</MicrotextSemi>
 * ```
 */

export const MicrotextSemi = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("!text-microtext-semi", className)}>{children}</p>;
};
import { cn } from "@/lib/utils";
import React from "react";

/**
 * microtext Text
 * @remarks
 * Desktop: 12px, 300 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Microtext className='pb-4'>Take the Quiz</Microtext>
 * ```
 */

export const Microtext = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <p className={cn("!text-microtext", className)}>{children}</p>;
};
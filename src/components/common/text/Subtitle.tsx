import { cn } from "@/lib/utils";
import React from "react";

/**
 * subtitle Text
 * @remarks
 * Desktop: 32px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Subtitle className='pb-4'>Take the Quiz</Subtitle>
 * ```
 */

export const Subtitle = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h3 className={cn("!text-subtitle", className)}>{children}</h3>;
};
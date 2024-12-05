import { cn } from "@/lib/utils";
import React from "react";

/**
 * heading Text
 * @remarks
 * Desktop: 24px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <Heading className='pb-4'>Take the Quiz</Heading>
 * ```
 */

export const Heading = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h4 className={cn("!text-heading", className)}>{children}</h4>;
};
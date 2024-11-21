import { cn } from "@/lib/utils";
import React from "react";

/**
 * heading-semi Text
 * @remarks
 * Desktop: 24px, 600 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <HeadingSemi className='pb-4'>Take the Quiz</HeadingSemi>
 * ```
 */

export const HeadingSemi = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h4 className={cn("!text-heading-semi", className)}>{children}</h4>;
};
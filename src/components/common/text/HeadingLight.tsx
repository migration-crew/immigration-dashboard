import { cn } from "@/lib/utils";
import React from "react";

/**
 * heading-light Text
 * @remarks
 * Desktop: 24px, 300 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <HeadingLight className='pb-4'>Take the Quiz</HeadingLight>
 * ```
 */

export const HeadingLight = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h4 className={cn("!text-heading-light", className)}>{children}</h4>;
};
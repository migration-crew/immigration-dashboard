import { cn } from "@/lib/utils";
import React from "react";

/**
 * subheading-lead Text
 * @remarks
 * Desktop: 20px, 700 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <SubheadingLead className='pb-4'>Take the Quiz</SubheadingLead>
 * ```
 */

export const SubheadingLead = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h5 className={cn("!text-subheading-lead", className)}>{children}</h5>;
};
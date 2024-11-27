import { cn } from "@/lib/utils";
import React from "react";

/**
 * subheading-lead-light Text
 * @remarks
 * Desktop: 20px, 300 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <SubheadingLeadLight className='pb-4'>Take the Quiz</SubheadingLeadLight>
 * ```
 */

export const SubheadingLeadLight = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h5 className={cn("!text-subheading-lead-light", className)}>{children}</h5>;
};
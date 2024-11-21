import { cn } from "@/lib/utils";
import React from "react";

/**
 * hero-light Text
 * @remarks
 * Desktop: 48px, 300 w
 * @param className - pass custom classes
 * @param children - text content
 * @example
 * ```tsx
 * <HeroLight className='pb-4'>Take the Quiz</HeroLight>
 * ```
 */

export const HeroLight = ({
  className,
  children,
}: {
  className?: string | undefined;
  children: React.ReactNode;
}) => {
  return <h1 className={cn("!text-hero-light", className)}>{children}</h1>;
};
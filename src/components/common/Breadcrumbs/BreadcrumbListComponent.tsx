import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadCrumbType } from "@/types/BreadCrumbType";
import React from "react";
import { HeadingSemi } from "../text/HeadingSemi";

type Props = {
  links: BreadCrumbType[];
};

export function BreadcrumbListComponent({ links }: Props) {
  return (
    <BreadcrumbList>
      {links.map((link, index) => {
        const isLast = index === links.length - 1;
        const isOnlyOne = links.length === 1;
        return (
          <React.Fragment key={link.href}>
            <BreadcrumbItem className="text-primary-black">
              {isLast && !isOnlyOne ? (
                <BreadcrumbPage className="text-primary-red">
                  <HeadingSemi>{link.name}</HeadingSemi>
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={link.href}>
                  <HeadingSemi>{link.name}</HeadingSemi>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {!isLast && <BreadcrumbSeparator />}
          </React.Fragment>
        );
      })}
    </BreadcrumbList>
  );
}

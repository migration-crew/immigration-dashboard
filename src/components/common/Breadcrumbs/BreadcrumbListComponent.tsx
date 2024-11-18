import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@/types/breadcrumb-link";
import React from "react";
import { HeadingSemi } from "../text/HeadingSemi";

type Props = {
  links: Link[];
};

export function BreadcrumbListComponent({ links }: Props) {
  return (
    <BreadcrumbList>
      {links.map((link, index) => {
        const isLast = index === links.length - 1;
        return (
          <React.Fragment key={link.href}>
            <BreadcrumbItem className="text-primary-black">
              {isLast ? (
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

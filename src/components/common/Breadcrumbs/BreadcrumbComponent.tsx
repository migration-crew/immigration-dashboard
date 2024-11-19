import { Link } from "@/types/breadcrumb-link";
import { Breadcrumb } from "../../ui/breadcrumb";
import { BreadcrumbListComponent } from "./BreadcrumbListComponent";

type Props = {
  className?: string | undefined;
  links: Link[];
};

/**
 * BreadcrumbComponent
 * @param className: (optional) pass all classes that you want to apply to the breadcrumb container
 * @param links: pass all links that you want to render inside the breadcrumb
 * @returns
 */

export function BreadcrumbComponent({ className, links }: Props) {
  return (
    <div className={`${className}`}>
      <Breadcrumb>
        <BreadcrumbListComponent links={links} />
      </Breadcrumb>
    </div>
  );
}

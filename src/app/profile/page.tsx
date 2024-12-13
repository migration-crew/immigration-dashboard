"use client";

import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/upImmigrationButton";
import { UserType } from "@/types/User/UserType";
import ProfileInput from "./_components/ProfileInput";

export type Props = {
  profile: UserType[];
};

const page = ({}: Props) => {
  const links = [{ name: "Profile", href: "/profile" }];

  return (
    <PageContainer>
      <div>
        <BreadcrumbComponent links={links} className="mb-[18px]" />
        <Card className="w-[1152px] h-[802px] py-[32px] ">
          <div className="grid gap-9 justify-items-center">
            <div className="grid justify-center">
              <Avatar className="w-[120px] h-[120px] border-secondary-light-gray mb-4">
                <AvatarImage src="" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <Button className="text-secondary-blue bg-transparent shadow-none">
                Upload Photo
              </Button>
            </div>
            <ProfileInput
              onDateChange={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Button className="w-[249px] h-14">Save</Button>
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default page;

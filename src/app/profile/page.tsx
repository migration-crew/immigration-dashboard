"use client";

import React from "react";
/* eslint-disable react-hooks/rules-of-hooks */

import { BreadcrumbComponent } from "@/components/common/Breadcrumbs/BreadcrumbComponent";
import { PageContainer } from "@/components/common/PageContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/upImmigrationButton";
import { UserType } from "@/types/User/UserType";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import ProfileInput from "./_components/ProfileInput";

export type Props = {
  profile: UserType[];
};

export const page = ({}: Props) => {
  const links = [{ name: "Profile", href: "/profile" }];
  const [users, setUsers] = useState<UserType | null>(null);
  const [imageURL, setImageURL] = useState<string | null>(null);
  const { getToken } = useAuth();
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      const token = await getToken();
      try {
        const response = await fetch(`${apiUrl}/user`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to add item");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching Users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleUpdateUser = (updatedData: UserType) => {
    setUsers(updatedData);
  };

  const handleSubmitProfile = async (data: UserType) => {
    try {
      const token = await getToken();
      const response = await fetch(
        `${apiUrl}/user`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const updatedData = await response.json();
        handleUpdateUser(updatedData);
      } else {
        throw new Error("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImageURL(imageURL);
    }
  };

  console.log(handleSubmitProfile);

  return (
    <PageContainer>
      <div>
        <BreadcrumbComponent links={links} className="mb-[18px]" />
        <Card className="w-[1152px] h-[802px] py-[32px] ">
          <div className="grid gap-9 justify-items-center">
            <div className="grid justify-center">
              <Avatar className="w-[120px] h-[120px] border-secondary-light-gray mb-4">
                <AvatarImage src={imageURL ?? ""} alt="User Avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <Button
                onClick={handleClick}
                className="text-secondary-blue bg-transparent shadow-none"
              >
                Upload File
              </Button>
              <Input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={handleChange}
              />
            </div>
            {users && (
              <ProfileInput
                users={users}
                onSubmit={handleSubmitProfile}
                onDateChange={() => {}}
              />
            )}
          </div>
        </Card>
      </div>
    </PageContainer>
  );
};

export default page;

"use client";

import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/upImmigrationButton";
import { ChatUserType } from "@/types/User/UserType";
import { Search } from "lucide-react";
import { useState } from "react";

type Props = {
  users: ChatUserType[];
};

export default function NewChatModal({ users }: Props) {
  const [searchText, setSearchText] = useState("");

  const filteredUsers = users.filter((user) => {
    const name = searchText.split(" ");
    if (name.length < 2) {
      return (
        user.firstName.toLowerCase().includes(name[0].toLowerCase()) ||
        user.lastName.toLowerCase().includes(name[0].toLowerCase())
      );
    } else {
      return (
        user.firstName.toLowerCase().includes(name[0].toLowerCase()) &&
        user.lastName.toLowerCase().includes(name[1].toLowerCase())
      );
    }
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-caption-semi">New Message</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-4">
            <div>
              <Input
                type="text"
                placeholder="Channel name"
                className="pl-4 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="w-full relative">
              <form className="relative w-full max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Search Users"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <button type="submit" className="sr-only">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="my-6">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 w-9 h-9 border-secondary-light-gray"
              >
                <Avatar>
                  <AvatarImage src={user.imageUrl} alt={user.firstName} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <CaptionSemi>
                    {user.firstName} {user.lastName}
                  </CaptionSemi>
                  <CaptionSemi className="">{user.email}</CaptionSemi>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full text-caption text-primary-white"
          >
            Start New Conversation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

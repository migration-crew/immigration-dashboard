"use client";

import { CaptionSemi } from "@/components/common/text/CaptionSemi";
import { MicrotextSemi } from "@/components/common/text/MicrotextSemi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
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
import { chatUserType } from "@/types/User/UserType";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useState } from "react";

type Props = {
  users: chatUserType[];
};

export default function NewChatModal({ users }: Props) {
  const [searchText, setSearchText] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<chatUserType[]>([]);

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

  const toggleUser = (user: chatUserType) => {
    setSelectedUsers((prev) =>
      prev.some((u) => u.email === user.email)
        ? prev.filter((u) => u.email !== user.email)
        : [...prev, user]
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          // variant="outline"
          className="bg-primary-red text-primary-white hover:opacity-80 active:opacity-50"
        >
          + New Chat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-caption-semi">New Chat</DialogTitle>
        </DialogHeader>
        <AnimatePresence>
          {selectedUsers.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-wrap gap-2"
            >
              {selectedUsers.map((user) => (
                <motion.div
                  key={user.email}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center bg-primary-light-blue text-primary-dark-blue rounded-full px-3 py-1"
                >
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src={user.imageURL} alt={user.firstName} />
                    <AvatarFallback className="text-caption-semi">
                      {user.firstName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm mr-2 text-caption-semi">
                    {user.firstName}
                  </span>
                  <button
                    onClick={() => toggleUser(user)}
                    className="text-primary-dark-blue hover:text-primary-red focus:outline-none"
                    aria-label={`Remove ${user.firstName}`}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
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

          <div className="my-6 grid gap-7">
            {filteredUsers.map((user, index) => (
              <div
                key={index}
                className="flex items-center space-x-10 h-9 border-secondary-light-gray justify-between"
              >
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage src={user.imageURL} alt={user.firstName} />
                    <AvatarFallback>{user.firstName[0]}</AvatarFallback>
                  </Avatar>

                  <div className="grid pl-3">
                    <CaptionSemi>
                      {user.firstName} {user.lastName}
                    </CaptionSemi>
                    <MicrotextSemi className="">{user.email}</MicrotextSemi>
                  </div>
                </div>
                <Checkbox
                  checked={selectedUsers.some((u) => u.email === user.email)}
                  onCheckedChange={() => toggleUser(user)}
                  className=""
                />
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button
            type="submit"
            className="w-full text-caption text-primary-white"
            disabled={selectedUsers.length === 0}
          >
            Start New Conversation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

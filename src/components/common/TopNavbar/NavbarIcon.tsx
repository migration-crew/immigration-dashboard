import { MessageType } from "@/types/Inbox/MessageType";
import { NotificationType } from "@/types/NotificationType";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

type Props = {
  items: (NotificationType | MessageType)[];
  icon: LucideIcon | IconType;
  isOpen: boolean;
  onToggle: () => void;
};

/**
 * NavbarIcon
 * @param items: this will be the list of notifications or messages
 * @param icon: this will be the icon to display, either from lucide-react or react-icons
 * @param isOpen: this will be the state of the dropdown
 * @param onToggle: this will be the function to toggle the dropdown
 * @returns
 */

export default function NavbarIcon({
  items,
  icon: Icon,
  isOpen,
  onToggle,
}: Props) {
  const unreadCount = items.length;

  return (
    <div className="relative">
      {/* Icon with badge */}
      <button
        onClick={onToggle}
        className="relative focus:outline-none hover:opacity-75"
      >
        <Icon className="h-6 w-6" />
        {unreadCount > 0 && (
          <div className="absolute -top-1 -right-1 bg-primary-red text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            {unreadCount}
          </div>
        )}
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-8 right-0 bg-primary-red text-primary-white  w-64">
          {items.length > 0 ? (
            <div>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-2 border-solid border-b border-primary-white hover:bg-primary-dark-red cursor-pointer"
                >
                  <p className="text-microtext">{item.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-4 py-2 text-sm">No messages</div>
          )}
        </div>
      )}
    </div>
  );
}

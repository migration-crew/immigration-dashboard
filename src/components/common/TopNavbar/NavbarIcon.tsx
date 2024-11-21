import { MessageType } from "@/types/Inbox/MessageType";
import { NotificationType } from "@/types/NotificationType";
import { LucideIcon } from "lucide-react";

type Props = {
  items: (NotificationType | MessageType)[];
  icon: LucideIcon;
  isOpen: boolean;
  onToggle: () => void;
};

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
      <button onClick={onToggle} className="relative focus:outline-none">
        <Icon className="h-6 w-6 text-muted-foreground" />
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
                  className="px-4 py-2 border-solid border-b border-primary-white hover:bg-red-900 cursor-pointer"
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

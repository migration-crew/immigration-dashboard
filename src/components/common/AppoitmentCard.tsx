import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";
import { Video } from "lucide-react";
import { Caption } from "./text/Caption";
import { CaptionSemi } from "./text/CaptionSemi";

export type User = {
  id: string;
  name: string;
  image?: string;
};

export type AppointmentCardProps = {
  name: string;
  date: Date | string;
  eventFormat: {
    type: "online" | "in-person";
    meetingId?: string;
  };
  description?: string;
  attendees: User[];
};

export function AppointmentCard({
  name,
  date,
  eventFormat,
  description,
  attendees,
}: AppointmentCardProps) {
  return (
    <Card className="w-[300px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-primary-red">
          <CaptionSemi>{name}</CaptionSemi>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Caption>{formatDate(date)}</Caption>
        <div className="flex items-center gap-2">
          {" "}
          {eventFormat.type === "online" && <Video className="h-4 w-4" />}
          <Caption className="capitalize">{eventFormat.type}</Caption>
          {eventFormat.type === "online"}
        </div>
        <Caption>Zoom: {eventFormat.meetingId}</Caption>
        {description && (
          <Caption className="text-sm text-muted-foreground">
            {description}
          </Caption>
        )}
        <div className="flex -space-x-2">
          {attendees.map((attendee) => (
            <Avatar key={attendee.id} className="border-2 border-background">
              <AvatarImage src={attendee.image} alt={attendee.name} />
              <AvatarFallback>
                {attendee.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

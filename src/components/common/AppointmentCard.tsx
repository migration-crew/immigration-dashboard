import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { AppointmentType } from '@/types/Appointment/AppointmentType';
import { BasicUserType } from '@/types/User/UserType';
import { Video } from 'lucide-react';
import { Separator } from '../ui/separator';
import { Caption } from './text/Caption';
import { CaptionSemi } from './text/CaptionSemi';

export type AppointmentCardProps = {
  appointment: AppointmentType;
  attendees: BasicUserType[];
};

export function AppointmentCard({
  appointment,
  attendees,
}: AppointmentCardProps) {
  const { appointmentType, date } = appointment;

  return (
    <>
      <Card className="w-full border-none shadow-none">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-primary-red">
            <CaptionSemi>{appointmentType.name}</CaptionSemi>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Caption>{formatDate(new Date(date))}</Caption>
          <Caption>{appointmentType.duration} minutes</Caption>
          <Caption>
            {appointmentType.price} {appointmentType.currency}
          </Caption>
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4" />
            <Caption>Online</Caption>
          </div>
          {appointmentType.name && (
            <Caption className="text-muted-foreground">
              {appointmentType.name}
            </Caption>
          )}
          <div className="flex -space-x-2">
            {attendees.map((attendee) => (
              <Avatar key={attendee._id} className="border-2 border-background">
                <AvatarImage
                  src={attendee.imageURL}
                  alt={`${attendee.firstName}'s avatar`}
                />
                <AvatarFallback>{attendee.firstName[0]}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </CardContent>
      </Card>
      <Separator className="my-1 w-full" />
    </>
  );
}

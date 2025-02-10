import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';
import { AppointmentType } from '@/types/Appointment/AppointmentType';
import { BasicUserType } from '@/types/User/UserType';
import { Video } from 'lucide-react';
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
    <Card className="border-none shadow-none">
      <CardHeader className="p-0 md:p-2 pt-2">
        <CardTitle>
          <CaptionSemi className="text-base font-semibold text-primary-red justify-start">
            {appointmentType.name}
          </CaptionSemi>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-1 p-0 md:p-2 pt-0">
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
          <Caption className="text-muted-foreground pb-2">
            {appointmentType.name}
          </Caption>
        )}
        <div>
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
  );
}

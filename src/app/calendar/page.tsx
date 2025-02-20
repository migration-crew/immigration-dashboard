'use client';
import { Button } from '@/components/ui/upImmigrationButton';
// import { DetailedCalendar } from '../calendar/_components/DetailedCalendar';
import Link from 'next/link';
import { PageContainer } from '@/components/common/PageContainer';
import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent';
import { AppointmentCard } from '@/components/common/AppointmentCard';
import { AppointmentType } from '@/types/Appointment/AppointmentType';
import { DynamicRoundedContainer } from '@/components/common/DynamicRoundedContainer';
import { useSearchParams } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { MyCalendar } from './_components/JoaoCalendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function CalendarPage() {
  const searchParams = useSearchParams();

  const applicationName = searchParams.get('name') || 'Unknown Application';

  const links = [
    { name: 'Applications', href: '/applications' },
    { name: applicationName, href: '' },
  ];

  const appointments: AppointmentType[] = [
    {
      id: '1',
      appointmentType: {
        id: '1',
        name: 'Zoom Meeting',
        duration: 60,
        currency: 'USD',
        price: 100,
      },
      date: new Date('2024-01-28T16:00:00'),
      user: {
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        nationality: 'US',
        language: 'English',
        address: '123 Main St, Anytown, USA',
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        email: 'john.doe@example.com',
        imageURL: '/placeholder.svg',
      },
    },
    {
      id: '2',
      appointmentType: {
        id: '1',
        name: 'First Consultation',
        duration: 60,
        currency: 'USD',
        price: 100,
      },
      date: new Date('2024-01-28T16:00:00'),
      user: {
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        nationality: 'US',
        language: 'English',
        address: '123 Main St, Anytown, USA',
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        email: 'john.doe@example.com',
        imageURL: '/placeholder.svg',
      },
    },
    {
      id: '3',
      appointmentType: {
        id: '1',
        name: 'First Consultation',
        duration: 60,
        currency: 'USD',
        price: 100,
      },
      date: new Date('2024-01-28T16:00:00'),
      user: {
        _id: '1',
        firstName: 'John',
        lastName: 'Doe',
        nationality: 'US',
        language: 'English',
        address: '123 Main St, Anytown, USA',
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        email: 'john.doe@example.com',
        imageURL: '/placeholder.svg',
      },
    },
  ];

  return (
    <>
      <PageContainer>
        <BreadcrumbComponent links={links} />
        <div>
          <Button asChild>
            <Link href={'/appointment'}>appointment</Link>
          </Button>
        </div>
        <div className="flex gap-4 items-center align-middle">
          <DynamicRoundedContainer
            title="Upcoming Appointments"
            className="w-1/4 h-full"
          >
            {appointments.map((appointment) => (
              <div key={appointment.id}>
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  attendees={[]}
                />
                <Separator className="w-11/12 justify-self-center" />
              </div>
            ))}
          </DynamicRoundedContainer>
          {/* <DetailedCalendar /> */}
          <MyCalendar />
        </div>
      </PageContainer>
    </>
  );
}

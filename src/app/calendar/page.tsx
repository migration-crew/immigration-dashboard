<<<<<<< HEAD
import { AppointmentCard } from '@/components/common/AppointmentCard';
import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent';
import { DynamicRoundedContainer } from '@/components/common/DynamicRoundedContainer';
import { PageContainer } from '@/components/common/PageContainer';
import { Button } from '@/components/ui/upImmigrationButton';
import { AppointmentType } from '@/types/Appointment/AppointmentType';
import Link from 'next/link';
import { DetailedCalendar } from '../calendar/_components/DetailedCalendar';
import ColorCodeChart from './_components/ColorCodeChart';
=======
import { Button } from '@/components/ui/upImmigrationButton';
import { DetailedCalendar } from '../calendar/_components/DetailedCalendar';
import Link from 'next/link';
import { PageContainer } from '@/components/common/PageContainer';
import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent';
import { AppointmentCard } from '@/components/common/AppointmentCard';
import { AppointmentType } from '@/types/Appointment/AppointmentType';
import { DynamicRoundedContainer } from '@/components/common/DynamicRoundedContainer';
>>>>>>> main

export default function CalendarPage() {
  const links = [{ name: 'Calendar', href: '/calendar' }];

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
<<<<<<< HEAD
        id: '1',
=======
        _id: '1',
>>>>>>> main
        firstName: 'John',
        lastName: 'Doe',
        nationality: 'US',
        language: 'English',
        address: '123 Main St, Anytown, USA',
<<<<<<< HEAD
        birthDate: '1990-01-01',
        gender: 'Male',
        email: 'john.doe@example.com',
        imageUrl: '/placeholder.svg',
=======
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        email: 'john.doe@example.com',
        imageURL: '/placeholder.svg',
>>>>>>> main
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
<<<<<<< HEAD
        id: '1',
=======
        _id: '1',
>>>>>>> main
        firstName: 'John',
        lastName: 'Doe',
        nationality: 'US',
        language: 'English',
        address: '123 Main St, Anytown, USA',
<<<<<<< HEAD
        birthDate: '1990-01-01',
        gender: 'Male',
        email: 'john.doe@example.com',
        imageUrl: '/placeholder.svg',
=======
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        email: 'john.doe@example.com',
        imageURL: '/placeholder.svg',
>>>>>>> main
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
<<<<<<< HEAD
        id: '1',
=======
        _id: '1',
>>>>>>> main
        firstName: 'John',
        lastName: 'Doe',
        nationality: 'US',
        language: 'English',
        address: '123 Main St, Anytown, USA',
<<<<<<< HEAD
        birthDate: '1990-01-01',
        gender: 'Male',
        email: 'john.doe@example.com',
        imageUrl: '/placeholder.svg',
=======
        dateOfBirth: '1990-01-01',
        gender: 'Male',
        email: 'john.doe@example.com',
        imageURL: '/placeholder.svg',
>>>>>>> main
      },
    },
  ];

  return (
    <>
      <PageContainer>
        <BreadcrumbComponent links={links} />
<<<<<<< HEAD
        <div className='flex justify-between items-center'>
          <Button asChild>
            <Link href={'/appointment'}>appointment</Link>
          </Button>
          <ColorCodeChart
            colorCodes={[
              { colorClass: 'bg-secondary-blue', description: 'Appointment' },
              { colorClass: 'bg-primary-red', description: 'Tasks' },
            ]}
          />
        </div>
        <div className='flex gap-4 justify-between'>
          <DynamicRoundedContainer
            title='Upcoming Appointments'
            className='w-[350px] h-[850px]'
=======
        <div>
          <Button asChild>
            <Link href={'/appointment'}>appointment</Link>
          </Button>
        </div>
        <div className="flex gap-4 justify-between">
          <DynamicRoundedContainer
            title="Upcoming Appointments"
            className="w-[350px] h-[850px]"
>>>>>>> main
          >
            {appointments.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                attendees={[]}
              />
            ))}
          </DynamicRoundedContainer>
          <DetailedCalendar />
        </div>
      </PageContainer>
    </>
  );
}

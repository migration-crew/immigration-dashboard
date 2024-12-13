import { PageContainer } from '@/components/common/PageContainer'
import React from 'react'
import { AppointmentDatePicker } from './_components/AppoinementDatePicker'
import { AppointmentTypeContainer } from './_components/AppoinmentTypeContainer'
import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent'
import { Button } from '@/components/ui/upImmigrationButton'

const page = () => {
  const links = [
    { name: "Calendar", href: "/calendar" },
    { name: "Appointment", href: "/appointment" },
  ];
  return (
    <PageContainer>
      <BreadcrumbComponent links={links} />
      <AppointmentTypeContainer />
      <AppointmentDatePicker />
      <div className='flex justify-end'>
      <Button>Confilm Date & Time</Button>

      </div>
    </PageContainer>
  )
}

export default page
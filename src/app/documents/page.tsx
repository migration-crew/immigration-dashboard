import ApplicationSwitcher from '@/components/common/ApplicationSwitcher';
import { BreadcrumbComponent } from '@/components/common/Breadcrumbs/BreadcrumbComponent'
import FilterSection from '@/components/common/FilterSection/FilterSection';
import { PageContainer } from '@/components/common/PageContainer'
import React from 'react'
import { DocumentTable } from './_components/DocumentTable';
import { documents } from '../playground/yuki/data/DocumentTable';
import { NewDocForm } from './_components/NewDocForm';

const documentPage = () => {
  const isAdmin = true
  const links = [
    { name: "DocumentManagement", href: "/documents" },
    { name: "mariaciccc", href: "/documents" },
  ];
  return (
    <PageContainer className='flex flex-col'>
      <div>
        <BreadcrumbComponent links={links} />
        {/* <ApplicationSwitcher applications={} /> */}
      </div>
      {/* <FilterSection  /> */}
      <div className='flex-1 flex flex-col justify-between gap-6'>
      <DocumentTable documents={documents} />
      {isAdmin && <NewDocForm />}
      </div>
      
    </PageContainer>
  )
}

export default documentPage
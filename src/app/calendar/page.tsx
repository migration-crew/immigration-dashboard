import { Button } from '@/components/ui/upImmigrationButton'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Button asChild><Link href={"/appointment"}>appointment</Link></Button>
    </div>
  )
}

export default page
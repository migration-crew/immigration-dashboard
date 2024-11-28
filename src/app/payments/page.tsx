import { Button } from '@/components/ui/upImmigrationButton'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <p>payment</p>
      <Button asChild>
        <Link href="/payments/1">1</Link>
      </Button>
      <Button asChild>
        <Link href="/payments/2">2</Link>
      </Button>
      <Button asChild>
        <Link href="/payments/3">3</Link>
      </Button>
      <Button asChild>
        <Link href="/payments/4">4</Link>
      </Button>
      <Button asChild>
        <Link href="/payments/5">5</Link>
      </Button>
    </div>
  )
}

export default page
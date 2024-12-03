import { Button } from '@/components/ui/upImmigrationButton'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <p>payment</p>
      <Button asChild>
        <Link href="/payments/PvpKKAtezj">1</Link>
      </Button>
      <Button asChild>
        <Link href="/payments/UIRclGQIfO">2</Link>
      </Button>
      <Button asChild>
        <Link href="/payments/sHyvFRqCeu">3</Link>
      </Button>
      <Button asChild>
        <Link href="/payments/vlgKNjRZHz">4</Link>
      </Button>
      <Button asChild>
        <Link href="/payments/yFwPtUXOFT">5</Link>
      </Button>
    </div>
  )
}

export default page
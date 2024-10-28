import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const MyProductHeader = ({title}) => {
  return (
    <div className='flex justify-between '>
      <h2 className="text-2xl font-bold">{title}</h2>
      <Button variant='link' className='transition-all duration-500 hover:translate-x-4'>
        <Link href='#' className='flex items-center gap-1 text-xl'>
            See More
            <ChevronRight  />
        </Link>
      </Button>
    </div>
  )
}

export default MyProductHeader

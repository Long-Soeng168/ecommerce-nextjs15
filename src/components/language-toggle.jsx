"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function LanguageToggle() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
        <Image className='object-contain w-10  p-1.5 aspect-square' src='/images/icons/english.png' width={60} height={60} alt='Logo Image' />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem >
          ខ្មែរ
        </DropdownMenuItem>
        <DropdownMenuItem >
          English
        </DropdownMenuItem>
         
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

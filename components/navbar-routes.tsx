'use client'

import { UserButton, useAuth } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { LogOut } from 'lucide-react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const NavbarRoutes = () => {
  const pathname = usePathname()

  const inTeacherPage = pathname.startsWith('/teacher')
  const inPlayPage = pathname.includes('/chapter')
  return (
      <div className={ 'flex gap-x-2 ml-auto' }>
        { inTeacherPage || inPlayPage ? (
            <Link href={ '/' }>
              <Button size={ 'sm' } variant={ 'ghost' }>
                <LogOut className={ 'h-4 w-4 mr-2' }/>
                Exit
              </Button>
            </Link>
        ) : (
              <Link href={ '/teacher/courses' }>
                <Button size={ 'sm' } variant={ 'ghost' }>
                  Teacher Mode
                </Button>
              </Link>
          ) }
        <UserButton afterSignOutUrl={ '/' }/>
      </div>
  )
}

import { MobileSidebar } from '@/app/(dashboard)/_components/moble-navbar'
import { NavbarRoutes } from '@/components/navbar-routes'

export const Navbar = () => {
  return (
      <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
        <MobileSidebar/>
        <NavbarRoutes/>
      </div>
  )
}

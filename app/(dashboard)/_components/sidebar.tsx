import { Logo } from './logo'
import { SidebarRoutes } from './sidebar-routes'

export const Sidebar = () => {
  return (
      <div
          className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
        <div className="w-full p-6 flex justify-center border-b">
          <Logo/>
        </div>
        <div className="flex flex-col w-full">
          { <SidebarRoutes/> }
        </div>
      </div>
  )
}

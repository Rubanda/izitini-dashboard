import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  MenuIcon,
} from "@heroicons/react/outline"
interface Isidebar {
  sidebarOpen: boolean
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({ sidebarOpen, setSidebarOpen }: Isidebar) => {
  return (
    <div className="sticky top-0 text-white  bg-header-blue z-30 ">
            <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 -mb-px">


      {/* Hamburger button */}
      <div className="flex  items-center">
      <button
        className="text-gray-500 hover:text-gray-600 lg:hidden"
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="w-6 h-6 text-white" />
      </button>
      <h2 className="font-bold font-lg mx-2  text-2xl">Dashboard</h2>
      </div>
      <div className="flex items-center justify-evenly space-x-3 mx-4">
        <div>
          <input
            type="text"
            className="h-4 p-5 rounded-full hidden lg:visible"
            placeholder="Search"
          />
        </div>
        <div>
          <BellIcon className="h-5 w-5 " />
        </div>
        <div>
          <ChatIcon className="h-5 w-5 " />
        </div>
        <div className="flex flex-row justify-center items-center space-x-2">
          <img
            src="https://media.istockphoto.com/vectors/african-american-beautiful-smiling-woman-with-long-straight-hair-vector-id1206844727?k=20&m=1206844727&s=612x612&w=0&h=JlSUV6FNxGNkgYT2hfz4I6AQjL4xHKBXDG0aYcxIMRA="
            className="w-9 h-9 rounded-full mx-auto"
            alt="admin"
          />
          <p className="">Admin</p>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </div>
      </div>
    </div>
    </div>

  )
}

export default Header

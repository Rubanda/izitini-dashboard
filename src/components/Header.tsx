import { BellIcon, ChatIcon } from "@heroicons/react/outline"

const Header = () => {
  return (
    <div className="flex flex-grow items-center h-20 bg-blue-400 justify-start sm:justify-between">
      <h2 className="font-bold font-lg mx-2 text-white text-2xl">Dashboard</h2>
      <div className="flex items-center justify-evenly mx-7">
        <div>
          <input
            type="text"
            className="h-4 p-5 rounded-full"
            placeholder="Search"
          />
        </div>
        <div>
          <BellIcon className="h-5 w-5 text-white" />
        </div>
        <div>
          <ChatIcon className="h-5 w-5 text-white" />
        </div>
        <div className="flex flex-row justify-center items-center">
          <img
            src="https://media.istockphoto.com/vectors/african-american-beautiful-smiling-woman-with-long-straight-hair-vector-id1206844727?k=20&m=1206844727&s=612x612&w=0&h=JlSUV6FNxGNkgYT2hfz4I6AQjL4xHKBXDG0aYcxIMRA="
            className="w-9 h-9 rounded-full mx-auto"
            alt="admin"
          />
          <p className="text-white">Admin</p>
        </div>
      </div>
    </div>
  )
}

export default Header

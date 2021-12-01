import { ViewGridIcon,TemplateIcon } from '@heroicons/react/solid'

const SideBar = () => {
  return (
    <div className="flex-1 flex-col justify-center bg-gradient-to-t from-blue-900 to-blue-500 p-4 h-full">
      <img
          src='https://izitini-spaces.fra1.digitaloceanspaces.com/syastem-images/Logo.png'
          className="mt-0"
          width="400px"
          height="90px"
          alt="logo"
        />
      <button className="flex flex-row justify-content">
        <i><ViewGridIcon /></i>
        <p>Dashboard</p>
      </button>
      <button className="flex flex-row flex-grow justify-center"><TemplateIcon /><p>Store</p></button>
      <div>Products</div>
      <div>Orders</div>
      <div>Coupons</div>
      <div>Reports</div>
      <div>Settings</div>
      <div />
      <div>Logout</div>


    </div>
  )
}

export default SideBar

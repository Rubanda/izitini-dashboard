import React,{useState} from "react"
// import {
//   Routes,
//   Route,
//   useLocation
// } from 'react-router-dom';
import Header from "./Header"
import SiderBar from "./SiderBar"

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
      {/* Sidebr  */}
      <SiderBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
      {/* Header  */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main>
        <div className="bg-gray-200 flex h-screen w-screen mx-auto">
          {/* Welcome */}
          <div className="w-screen">
            
          </div>
        </div>
      </main>
      </div>
      {/* <Routes>
        <Route path="/" ele ></Route>
      </Routes> */}
    </div>
    </>
  )
}

export default Dashboard

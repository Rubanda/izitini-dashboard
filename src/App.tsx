import React from "react"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import SiderBar from "./components/SiderBar"
function App() {
  return (
    <div>
      <header></header>
      <main>
        <div className="bg-gray-200 flex h-screen w-screen mx-auto">
          <div>
            <SiderBar />
          </div>
          <div className="w-screen">
            <div>
              <Header />
            </div>
            <Dashboard />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

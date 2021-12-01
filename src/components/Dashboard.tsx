const Dashboard = () => {
  return (
    <>
      <div className="mt-9 mx-3">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <div className=" bg-white p-2 rounded-lg">
            <h2>Order Activity</h2>
          </div>
          <div className="bg-white p-2 rounded-md">
            <h2>Empty</h2>
            <div>hello</div>
          </div>
          <div className="grid grid-cols gap-4 ">
            <div className="bg-white p-2 rounded-md">
              <h2>87454RWF</h2>
            </div>
            <div className="bg-white p-2 rounded-md">
              <h2>87454RWF</h2>
            </div>
          </div>
        </div>
      
      {/* seconde grid */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-5">
        <div className="flex flex-col items-center bg-white p-4 rounded-lg">
          <h2>Shortcuts</h2>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg">
          <h2>Statistics</h2>
        </div>
        <div className="flex flex-col items-center bg-white p-4 rounded-lg">
          <h2>Holidays</h2>
        </div>
      </div>
      </div>
    </>
  )
}

export default Dashboard

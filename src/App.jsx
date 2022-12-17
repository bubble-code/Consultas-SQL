import { Outlet } from 'react-router-dom'
import { NavBar } from './component'

function App() {

  return (
    <div className='h-screen w-screen flex flex-col justify-start align-middle bg-myBG'>
      <NavBar />
      <div className=" p-3 container flex flex-wrap items-center justify-between mx-auto relative h-full w-full">
        <div className='w-full h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { RouterProvider, Outlet } from 'react-router-dom'
import { router } from './routes'
import { NavBar } from './component'

function App() {

  return (
    <RouterProvider router={router}>
      <div>
        <NavBar />
        <div className="App">
          <header className="App-header">
            <h1>App</h1>
          </header>
          <Outlet />
        </div>
      </div>
    </RouterProvider>
  )
}

export default App

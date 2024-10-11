import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import First from './pages/First'
import Second from './pages/Second'
import { Third } from './pages/Third'


function App() {
  const abc = createBrowserRouter([
    {path:"/",
      element:<First/>
    },
    {path:"/second",
      element:<Second/>
    },
    {path: '/third',
      element:<Third/>
    }
  ])
  return (
    <div>
    <RouterProvider router={abc}></RouterProvider>


    
    
    </div>
  )
}

export default App
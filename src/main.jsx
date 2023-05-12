import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import router from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-full lg:max-w-7xl  mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>,
  </div>
)

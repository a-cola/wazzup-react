import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChatPage } from './ChatPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { StartPage } from './StartPage'

const router = createBrowserRouter(
  [
    {path:'/', element:<StartPage />, errorElement: <p>Route non esiste</p>},
    {path:'/chatlist', element:<StartPage />},
    {path:'/chatlist/:id', element:<ChatPage />, loader: listLoader}
  ]
)

function listLoader({params}:any) {
  return params.id;
}

// StrictMode aggiunge dei controlli
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
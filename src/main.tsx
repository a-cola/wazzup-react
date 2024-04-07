import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChatPage } from './ChatPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { StartPage } from './StartPage'
import { ErrorPage } from './ErrorPage'

const router = createBrowserRouter(
  [
    {path:'/', element:<StartPage />, errorElement: <ErrorPage />},
    {path:'/chatlist', element:<StartPage />},
    {path:'/chatlist/:id', element:<ChatPage />, loader: listLoader, errorElement: <ErrorPage />}
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
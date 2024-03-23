import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChatList } from './ChatList'
import { CurrentChat } from './CurrentChat'

// StrictMode aggiunge dei controlli
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChatList />
    <CurrentChat />
  </React.StrictMode>,
)
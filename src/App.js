import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ConversationScreen from './components/macro/ConversationScreen'
import NoSelectedChat from './components/macro/NoSelectedChat'
import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<ChatScreen />}>
          <Route index element={<NoSelectedChat />} />
          <Route path='/:conversation_id' element={<ConversationScreen />} />
        </Route>
        <Route path='/login' element={<LoginScreen />} />
      </Routes>
    </div>
  )
}

export default App
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JournalPage from './pages/JournalPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/journal" element={<JournalPage />} />
    </Routes>
  )
}

export default App

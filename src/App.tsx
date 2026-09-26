import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import JournalPage from './pages/JournalPage'
import JournalAddPage from './pages/JournalAddPage'
import JournalArticlePage from './pages/JournalArticlePage'
import ToolkitPage from './pages/ToolkitPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import { useScrollToHash } from './utils/useScrollToHash'

function App() {
  useScrollToHash()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/journal" element={<JournalPage />} />
      <Route path="/journal/add" element={<JournalAddPage />} />
      <Route path="/journal/:slug" element={<JournalArticlePage />} />
      <Route path="/toolkit" element={<ToolkitPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App

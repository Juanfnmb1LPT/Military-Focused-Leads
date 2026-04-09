import { HashRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import VAHelp from './pages/VAHelp'
import GetStarted from './pages/GetStarted'

function App() {
  return (
    <HashRouter>
      <div className="bg-surface font-body text-on-surface antialiased">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/va-help" element={<VAHelp />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App

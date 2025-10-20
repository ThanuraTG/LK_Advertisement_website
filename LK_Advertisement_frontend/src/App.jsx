import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Home_Page from './pages/Home_Page'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          {/* <Route path="/about" element={<></>} />
          <Route path="/contact" element={<></>} />
          <Route path="*" element={<></>} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App

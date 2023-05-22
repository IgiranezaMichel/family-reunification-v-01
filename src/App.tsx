import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Index } from './pages/visitor'
import { Login } from './pages/visitor/Login'
function App() {
return (
<>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App

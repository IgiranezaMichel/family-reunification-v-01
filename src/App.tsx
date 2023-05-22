import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Index } from './pages/visitor'
import { Login } from './pages/visitor/Login'
import { Signup } from './pages/visitor/Signup'
function App() {
return (
<>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/sign-up" element={<Signup/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App

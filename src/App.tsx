import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Index } from './pages/visitor'
import { Login } from './pages/visitor/Login'
import { Signup } from './pages/visitor/Signup'
import { Admin } from './pages/admin'
function App() {
return (
<>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/sign-up" element={<Signup/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App

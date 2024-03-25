import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Index } from './pages/visitor'
import { Login } from './pages/visitor/Login'
import { Signup } from './pages/visitor/Signup'
import { Admin } from './pages/admin'
import { User } from './pages/user'
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
          <Route path="/user" element={<User/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App

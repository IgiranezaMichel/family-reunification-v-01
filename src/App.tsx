import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Admin } from './pages/admin'
import { Customer } from './pages/customer'
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
          <Route path="/admin" element={<Admin/>} />
          <Route path="/user" element={<Customer/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App

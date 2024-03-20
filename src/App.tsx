import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Index } from './pages/visitor'
function App() {
return (
<>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index/>} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App

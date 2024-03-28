import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Contact } from './pages/Contact'
import { Landing } from './pages/Landing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
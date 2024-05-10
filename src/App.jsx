import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Cartao from './Routes/Cartao'
import Agenda from './Routes/Agenda'
import Pontuacao from './Routes/Pontuacao'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartao" element={<Cartao />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/pontuacao" element={<Pontuacao />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Cartao from './Routes/Cartao'
import Agenda from './Routes/Agenda'
import Pontuacao from './Routes/Pontuacao'
import Login from './Routes/Login'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cartao" element={<Cartao />}/>
          <Route path="/agenda" element={<Agenda />}/>
          <Route path="/pontuacao" element={<Pontuacao/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

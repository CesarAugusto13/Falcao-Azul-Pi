import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './route/Home'
import Cartao from './route/Cartao'
import Agenda from './route/Agenda'
import Pontuacao from './route/Pontuacao'
import Login from './route/Login'

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

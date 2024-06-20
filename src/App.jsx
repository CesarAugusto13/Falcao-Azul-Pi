import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './route/Home';
import Cartao from './route/Cartao';
import Agenda from './route/Agenda';
import Login from './route/Login';
import Register from './route/Register';
import Points from './route/Points';
import ReqAmigo from './route/ReqAmigo';
import ReqCompanheiro from './route/ReqCompanheiro';
import ReqPesquisador from './route/ReqPesquisador';
import ReqPioneiro from './route/ReqPioneiro';
import ReqExcursionista from './route/ReqExcursionista';
import ReqGuia from './route/ReqGuia';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartao" element={<Cartao />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/pontuacao" element={<Points />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cartao/amigo" element={<ReqAmigo />} />
          <Route path="/cartao/companheiro" element={<ReqCompanheiro />} />
          <Route path="/cartao/pesquisador" element={<ReqPesquisador />} />
          <Route path="/cartao/pioneiro" element={<ReqPioneiro />} />
          <Route path="/cartao/excursionista" element={<ReqExcursionista />} />
          <Route path="/cartao/guia" element={<ReqGuia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

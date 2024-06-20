import React from 'react';
import { NavLink } from 'react-router-dom'; 
import '../assets/public/Menu.css'
import LogoFalcaoAzul from '../assets/images/logo.png'
import IconePerfil from '../assets/images/perfil3.png'

function Menu() {
    const [isHomeActive, setIsHomeActive] = React.useState(false);
  const [isCartaoActive, setIsCartaoActive] = React.useState(false);
  const [isAgendaActive, setIsAgendaActive] = React.useState(false);
  const [isPontuacaoActive, setIsPontuacaoActive] = React.useState(false);
  const [isLoginActive, setIsLoginActive] = React.useState(false); 

  const handleClick = (to) => {

    setIsHomeActive(false);
    setIsCartaoActive(false);
    setIsAgendaActive(false);
    setIsPontuacaoActive(false);
    setIsLoginActive(false);

    switch (to) {
      case '/':
        setIsHomeActive(true);
        break;
      case '/cartao':
        setIsCartaoActive(true);
        break;
      case '/agenda':
        setIsAgendaActive(true);
        break;
      case '/pontuacao':
        setIsPontuacaoActive(true);
        break;
      case '/login':
        setIsLoginActive(true);
        break;
      default:
        break;
    }
  };
    return (
        <div className="menu-container">
            <div className="logo-container">
                <img src={LogoFalcaoAzul} alt="Logo Desbravadores" className="logo" />
                <h3>Clube de Desbravadores Falcão Azul</h3>
            </div>
            <header>
                <nav>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive || isHomeActive ? "nav-link active" : "nav-link")}
                        onClick={() => handleClick('/')} 
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/cartao"
                        className={({ isActive }) => (isActive || isCartaoActive ? "nav-link active" : "nav-link")}
                        onClick={() => handleClick('/cartao')} 
                    >
                        Área do Cartão
                    </NavLink>
                    <NavLink
                        to="/agenda"
                        className={({ isActive }) => (isActive || isAgendaActive ? "nav-link active" : "nav-link")}
                        onClick={() => handleClick('/agenda')} 
                    >
                        Agenda
                    </NavLink>
                    <NavLink
                        to="/pontuacao"
                        className={({ isActive }) => (isActive || isPontuacaoActive ? "nav-link active" : "nav-link")}
                        onClick={() => handleClick('/pontuacao')} 
                    >
                        Pontuação
                    </NavLink>
                </nav>
            </header>
            <div className='login'>
                <NavLink to='/login' className="nav-link" activeClassName="active-link">
                    <h4>Login / Cadastro</h4>
                </NavLink>
                <img src={IconePerfil} alt="Icone Perfil" className='perfil'/>
            </div>
        </div>
    );
}

export default Menu;

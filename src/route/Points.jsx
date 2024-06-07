import React, { useState } from 'react';
import '../assets/public/Points.css';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Trofeu from '../assets/images/trofeu.png'

const Points = () => {
  const [pointsGainData, setPointsGainData] = useState([
    { acao: 'Apresentação da unidade no horário', pontos: '+3000' },
    { acao: 'Entrar em forma primeiro', pontos: '+1000' },
    { acao: 'Grito mais alto ao sair de forma', pontos: '+500' },
    { acao: 'Grito de Guerra no final', pontos: '+500' },
    { acao: 'Prova Elaborada', pontos: '+5000 a +2000' },
    { acao: 'Prova rápida', pontos: '+1000 a +400' },
  ]);
  const [pointsLossData, setPointsLossData] = useState([
    { acao: 'Apresentação da unidade fora do horário', pontos: '-1000' },
    { acao: 'Falta de uniforme', pontos: '-500' },
    { acao: 'Não estar de lenço', pontos: '-500' },
    { acao: 'Comportamento inadequado', pontos: '-500' },
    { acao: 'Desrespeito', pontos: '-1000' },
    { acao: 'Falta sem justificativa', pontos: '-500' },
  ]);

  return (
    <div>
      <Menu />
      <h1 className="josefin-sans-heading">Pontuação</h1>

      <div className="cards-container">
        <div className="card gain-card">
          <h2 className="card-title">Conquista de Pontos</h2>
          <table className="card-table">
            <thead>
              <tr>
                <th>Ação</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              {pointsGainData.map((data) => (
                <tr key={data.acao}>
                  <td>{data.acao}</td>
                  <td>{data.pontos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card loss-card">
          <h2 className="card-title">Perda de Pontos</h2>
          <table className="card-table">
            <thead>
              <tr>
                <th>Ação</th>
                <th>Pontos</th>
              </tr>
            </thead>
            <tbody>
              {pointsLossData.map((data) => (
                <tr key={data.acao}>
                  <td>{data.acao}</td>
                  <td>{data.pontos}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div class="new-items-container">
          <div class="new-item">
            <img src={Trofeu} alt='Troféu'/>
            <h3>Premiacao do Semestre</h3>
          </div>

          <div class="new-item">
            <img src="" alt="Item 2 description"/>
            <p>Item 2 Title</p>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Points;

import React from 'react';
import Header from './components/Header';
import Title from './components/Title';
import './styles/App.css';  // Estilo global do app

const App = () => {
  return (
    <div className="app">
      <Header />  {/* Exibe o Header */}
      <Title />   {/* Exibe o Title com a imagem */}
    </div>
  );
};

export default App;

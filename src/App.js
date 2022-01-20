import Header from "./header/Header";
import "./App.css"
import GlobalStyle from "./GlobalStyle";
import React from "react";
import Descricao from "./descricao/descricao";
import Participantes from "./participantes/participantes";

function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Header />
      <Descricao />
      <Participantes />
    </React.StrictMode>   
  );
}

export default App;

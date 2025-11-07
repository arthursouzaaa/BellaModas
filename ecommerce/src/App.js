import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ListaProdutos from "./components/ListaProdutos";
import { useEffect } from "react";
import { useState } from "react";
import ExclusiveSection from "./components/ExclusiveSection";
import Avaliacoes from "./components/Avaliacoes";
import Footer from "./components/Footer";

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
  fetch('/db.json')
    .then(res => res.json())
    .then((data) => setProdutos(data.products)); 
    }, [])

  return (
  <Router>
    <div className="App">
      <Navbar />
      <main>
        <Header />
        <div className="page-inner-content"></div>
        <div className="section-title">
          <h3>Produtos Selecionados</h3>
          <div className="underline"></div>
        </div>

        <div className="main-content">
          <ListaProdutos produtos={produtos}/>
        </div>
      </main>
      <ExclusiveSection />
      <Avaliacoes />
      <Footer />
    </div>
  </Router>
  );
}

export default App;
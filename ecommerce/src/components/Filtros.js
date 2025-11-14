import React, { useState } from 'react';

export default function Filtros({ produtos, onFiltrar, onLimparFiltros, filtrosAtivos }) {
  const [filtros, setFiltros] = useState({
    categoria: '',
    precoMin: '',
    precoMax: '',
    ordenacao: 'nome',
    rating: ''
  });

  const aplicarFiltros = () => {
    let filtrado = [...produtos];

    // Filtro por busca
    if (filtros.categoria) {
      filtrado = filtrado.filter(produto => 
        produto.name.toLowerCase().includes(filtros.categoria.toLowerCase())
      );
    }

    // Filtro por preço
    if (filtros.precoMin) {
      filtrado = filtrado.filter(produto => produto.price >= parseFloat(filtros.precoMin));
    }
    if (filtros.precoMax) {
      filtrado = filtrado.filter(produto => produto.price <= parseFloat(filtros.precoMax));
    }

    if (filtros.rating) {
      filtrado = filtrado.filter(produto => produto.rating >= parseInt(filtros.rating));
    }

    filtrado.sort((a, b) => {
      switch(filtros.ordenacao) {
        case 'preco-asc': return a.price - b.price;
        case 'preco-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.name.localeCompare(b.name);
      }
    });

    const temFiltros = filtros.categoria || filtros.precoMin || filtros.precoMax || filtros.rating || filtros.ordenacao !== 'nome';
    onFiltrar(filtrado, temFiltros);
  };

  const limparFiltros = () => {
    setFiltros({
      categoria: '',
      precoMin: '',
      precoMax: '',
      ordenacao: 'nome',
      rating: ''
    });
    onLimparFiltros();
  };

  return (
    <div className="filtros-container">
      <div className="filtro-item">
        <label>🔍 Buscar produto</label>
        <input 
          type="text" 
          placeholder="Digite o nome..."
          value={filtros.categoria}
          onChange={(e) => setFiltros({...filtros, categoria: e.target.value})}
        />
      </div>

      <div className="filtro-item">
        <label>📊 Ordenar por</label>
        <select 
          value={filtros.ordenacao}
          onChange={(e) => setFiltros({...filtros, ordenacao: e.target.value})}
        >
          <option value="nome">Nome A-Z</option>
          <option value="preco-asc">Preço: Menor → Maior</option>
          <option value="preco-desc">Preço: Maior → Menor</option>
          <option value="rating">Melhor Avaliados</option>
        </select>
      </div>

      <div className="filtro-item">
        <label>⭐ Avaliação mínima</label>
        <select 
          value={filtros.rating}
          onChange={(e) => setFiltros({...filtros, rating: e.target.value})}
        >
          <option value="">Todas as avaliações</option>
          <option value="5">⭐⭐⭐⭐⭐ 5 estrelas</option>
          <option value="4">⭐⭐⭐⭐ 4+ estrelas</option>
          <option value="3">⭐⭐⭐ 3+ estrelas</option>
        </select>
      </div>

      <div className="filtro-item">
        <label>💰 Preço mínimo</label>
        <input 
          type="number" 
          placeholder="R$ 0,00"
          value={filtros.precoMin}
          onChange={(e) => setFiltros({...filtros, precoMin: e.target.value})}
        />
      </div>

      <div className="filtro-item">
        <label>💎 Preço máximo</label>
        <input 
          type="number" 
          placeholder="R$ 500,00"
          value={filtros.precoMax}
          onChange={(e) => setFiltros({...filtros, precoMax: e.target.value})}
        />
      </div>

      <div className="filtros-actions">
        <button className="btn-aplicar-filtros" onClick={aplicarFiltros}>
          ✅ Aplicar Filtros
        </button>
        {(filtrosAtivos || filtros.categoria || filtros.precoMin || filtros.precoMax || filtros.rating || filtros.ordenacao !== 'nome') && (
          <button className="btn-limpar-filtros" onClick={limparFiltros}>
            🗑️ Limpar
          </button>
        )}
      </div>
    </div>
  );
}
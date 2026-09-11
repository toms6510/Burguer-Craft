// ...existing code...
import React from 'react';
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';
import Button from '../componentes/Button';
import { useProdutos } from '../hooks/useProdutos';

export default function Home() {
  const idLoja = 10;
  const { produtos, carregando, erro } = useProdutos(idLoja);

  const listaProdutos = Array.isArray(produtos) ? produtos : [];

  return (
    <div className="home-container">
      <Header />

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Bem-vindo ao Burguer-Craft</h1>
        <p>Os melhores hambúrgueres artesanais feitos para você.</p>

        <Button text="Ver Cardápio" onClick={() => alert('Indo para o cardápio!')} />

        <section style={{ marginTop: '3rem' }}>
          <h2>Nossos Produtos</h2>

          {carregando && <p>Carregando produtos...</p>}
          {erro && <p style={{ color: 'red' }}>Erro ao carregar: {erro}</p>}

          {!carregando && !erro && listaProdutos.length === 0 && (
            <p>Nenhum produto encontrado.</p>
          )}

          {!carregando && !erro && listaProdutos.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              {listaProdutos.map((produto) => (
                <div
                  key={produto.id}
                  style={{
                    border: '1px solid #ccc',
                    padding: '1rem',
                    borderRadius: '8px',
                    width: '220px',
                    textAlign: 'left',
                  }}
                >
                  <img
                    src={produto.imagem || 'https://via.placeholder.com/220x140?text=Produto'}
                    alt={produto.nome || 'Produto'}
                    style={{ width: '100%', height: '140px', objectFit: 'cover', borderRadius: '4px' }}
                  />

                  <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>
                    {produto.nome || 'Produto sem nome'}
                  </h3>

                  <p style={{ fontWeight: 'bold', color: '#27ae60' }}>
                    R$ {Number(produto.preco || 0).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
// ...existing code...
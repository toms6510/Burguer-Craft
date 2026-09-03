import '../styles/Produto.css';
import { useState } from 'react';
import { Button } from './Button'; // Deve ter as chaves { Button }

function Produto({ nome, valor, imagem, aoClicar }) {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <article className="produto">
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>

      <div className="preco">R${valor}</div>

      <div className="quantidade">
        <button onClick={() => setQuantidade(quantidade + 1)}>+</button>
        <span>{quantidade}</span>
        <button
          onClick={() => setQuantidade(quantidade - 1)}
          disabled={quantidade === 1}
        >
          -
        </button>
      </div>

      {/* Chama o componente Button */}
      <Button 
        text="Comprar" 
        onClick={aoClicar} 
      />
    </article>
  );
}

export default Produto;
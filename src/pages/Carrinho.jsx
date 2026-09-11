import "../styles/ModalCarrinho.css";
export default function ModalCarrinho({ itens, aoFechar }) {
 function finalizarPedido() {
 aoFechar();
 // redirecionar para /checkout
 }
 return (
 <div className="carrinho_modal">
 <div className="carrinho_conteudo">
 <button className="btn_fechar" onClick={aoFechar}>X</button>
 <h2>Seu Pedido</h2>
 {/*se o numero de itens for 0 exibe a mensagem de carrinho vazio*/}
 {itens.length === 0 ? (<div>Carrinho vazio.</div>)
 : (<ul>
 {itens.map((item) => (
 <li key={item.id}>
 <span>{item.nome}</span> x <span>{item.quantidade}</span>{" "}
 <span>R$ {item.valor.toFixed(2)}</span>
 </li>
 ))}
 </ul>
 )}
 <button onClick={finalizarPedido}>Fechar pedido</button>
 </div>
 </div>
 );
}
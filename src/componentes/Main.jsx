import '../styles/Main.css'
import Produto from './Produto';

function Main() {
    function adicionarProduto() {
        alert("Adicionado ao carrinho")
    }
    return(
        <main>
           
            <Produto
                nome="Manhattan Burger"
                valor="55"
                imagem="manha.jpg"
                aoClicar={adicionarProduto}>
            </Produto>
              <Produto
                nome="Burger Boss"
                valor="75"
                imagem="boss.jpg"
                  aoClicar={adicionarProduto}>
            </Produto>
     
            <Produto
                nome="The Big Prime"
                valor="55"
                imagem="prime.jpg"
                aoClicar={adicionarProduto}>
            </Produto>
              <Produto
                nome="Bacon One"
                valor="75"
                imagem="bacon.avif"
                  aoClicar={adicionarProduto}>
            </Produto>
            <Produto
                nome="Onion prime "
                valor="55"
                imagem="onion.jpg"
                aoClicar={adicionarProduto}>
            </Produto>
              <Produto
                nome="Double smash"
                valor="75"
                imagem="smash.jpg"
                  aoClicar={adicionarProduto}>
            </Produto>
     
            <Produto
                nome="XSalad"
                valor="55"
                imagem="xsalad.jpg"
                aoClicar={adicionarProduto}>
            </Produto>
              <Produto
                nome="Cheddar Trio"
                valor="75"
                imagem="trio.jpg"
                  aoClicar={adicionarProduto}>
            </Produto>
            <Produto
                nome="Australian boy"
                valor="55"
                imagem="australian.jpg"
                aoClicar={adicionarProduto}>
            </Produto>
           
            
        </main>
    )
}
export default Main;

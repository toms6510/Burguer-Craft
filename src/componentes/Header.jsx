import '../styles/Header.css';

function Header() {
  return (
    <header>
      <nav>
        <h1 className="bigg">Burger Craft</h1>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Cardapio</a></li>
          <li><a href="#">🛒 Carrinho</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
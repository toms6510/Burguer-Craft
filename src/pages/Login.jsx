import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUsuario } from '../hooks/useUsuario';
import '../styles/Login.css';

export default function Login() {
  const navigate = useNavigate();
  const { email, senha, erro, carregando, setEmail, setSenha, entrar } = useUsuario();

  const handleLogin = async (e) => {
    e.preventDefault();
    const resultado = await entrar();
    if (resultado) {
      navigate('/Home');
    }
  };

  return (
    <div className="login-page">
      <div className="box">

        <div className="painel-esq">
          <div className="bolinhas">
            <span className="bola red"></span>
            <span className="bola yellow"></span>
            <span className="bola green"></span>
          </div>

          <div className="painel-esq-conteudo">
            <span className="tag">Burger Craft</span>
            <h2>Primeira vez na Burger Craft?</h2>
            <p>Crie sua conta para acompanhar seus pedidos, salvar endereços de entrega e aproveitar promoções exclusivas.</p>
        <Link to="/cadastro" className="btn-cadastrar">
  Cadastrar-se Agora
</Link>
          </div>

          <div className="footer-texto">Portal do Cliente | Burger Craft</div>
        </div>

        <div className="painel-dir">
          <Link
            to="/"
            style={{ background: 'none', border: 'none', color: '#ff7a00', cursor: 'pointer', marginBottom: '16px', fontSize: '0.75rem', fontWeight: '600', padding: 0, textAlign: 'left', textDecoration: 'none', display: 'inline-block' }}
          >
            ← Voltar para a Home
          </Link>

          <h2>Acesse sua Conta</h2>
          <p className="sub">Entre para acompanhar seus pedidos e endereços salvos.</p>

          {erro && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '-8px' }}>{erro}</p>}

          <form onSubmit={handleLogin} className="form">
            <div className="campo">
              <label>E-mail</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>

            <div className="campo">
              <div className="campo-linha">
                <label>Senha</label>
                <a href="#recuperar">Esqueceu a senha?</a>
              </div>
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="btn-entrar" disabled={carregando}>
              {carregando ? 'Entrando...' : 'Entrar na Plataforma →'}
            </button>
          </form>

          <div className="divisor"><span>ou entre com</span></div>

          <div className="sociais">
            <button type="button">Google</button>
            <button type="button">GitHub</button>
          </div>
        </div>

      </div>
    </div>
  );
}

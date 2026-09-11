import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cadastrarUsuario } from '../services/usuarioService';
import '../styles/Login.css';

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleCadastro = async (e) => {
    e.preventDefault();

    setErro('');

    // Verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
      setErro('As senhas não são iguais.');
      return;
    }

    try {
      setCarregando(true);

      await cadastrarUsuario(nome, email, senha);

      // Cadastro realizado
      alert('Conta criada com sucesso!');

      // Volta para o login
      navigate('/');

    } catch (error) {
      setErro(error.message || 'Erro ao criar a conta.');
    } finally {
      setCarregando(false);
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

            <h2>Crie sua conta!</h2>

            <p>
              Cadastre-se para acompanhar seus pedidos,
              salvar endereços de entrega e aproveitar
              promoções exclusivas.
            </p>

            <Link to="/" className="btn-cadastrar">
              Já tenho uma conta
            </Link>

          </div>

          <div className="footer-texto">
            Portal do Cliente | Burger Craft
          </div>

        </div>

        <div className="painel-dir">

          <Link
            to="/"
            style={{
              background: 'none',
              border: 'none',
              color: '#ff7a00',
              cursor: 'pointer',
              marginBottom: '16px',
              fontSize: '0.75rem',
              fontWeight: '600',
              padding: 0,
              textAlign: 'left',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            ← Voltar para Login
          </Link>

          <h2>Criar sua Conta</h2>

          <p className="sub">
            Preencha seus dados para criar sua conta.
          </p>

          {erro && (
            <p
              style={{
                color: '#ef4444',
                fontSize: '0.8rem',
                marginBottom: '10px'
              }}
            >
              {erro}
            </p>
          )}

          <form
            className="form"
            onSubmit={handleCadastro}
          >

            <div className="campo">
              <label>Nome</label>

              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                required
              />
            </div>

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
              <label>Senha</label>

              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <div className="campo">
              <label>Confirmar senha</label>

              <input
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="btn-entrar"
              disabled={carregando}
            >
              {carregando
                ? 'Criando conta...'
                : 'Criar minha conta →'}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}
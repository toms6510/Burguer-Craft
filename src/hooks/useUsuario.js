import { useState } from 'react'
import { fazerLogin, cadastrarUsuario } from '../services/usuarioService'

export function useUsuario() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [carregando, setCarregando] = useState(false)

  async function entrar() {
    setErro('')
    setCarregando(true)
    try {
      return await fazerLogin(email, senha)
    } catch (error) {
      setErro(error.message)
      return null
    } finally {
      setCarregando(false)
    }
  }

  async function cadastrar() {
    setErro('')
    setCarregando(true)
    try {
      return await cadastrarUsuario(nome, email, senha)
    } catch (error) {
      setErro(error.message)
      return null
    } finally {
      setCarregando(false)
    }
  }

  return { nome, email, senha, erro, carregando, setNome, setEmail, setSenha, entrar, cadastrar }
}

import React from 'react';
import '../styles/Button.css'; // Importa o CSS do botão

export function Button({ text, onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-custom ${className}`}
    >
      {text}
    </button>
  );
}
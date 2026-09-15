import React, { useState } from 'react';

function Login({ onLogin, onClose, switchToRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Atualiza os campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errorMessage) setErrorMessage(''); // Limpa mensagens de erro ao digitar
  };

  // Submissão do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      await onLogin(formData);
      if (onClose) onClose();
    } catch (err) {
      console.error('Erro no login:', err);
      setErrorMessage(
        err instanceof TypeError
          ? 'Não foi possível ligar ao servidor. Inicia a API e tenta novamente.'
          : err.message || 'Credenciais inválidas. Verifica o e-mail e a palavra-passe.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container text-slate-100">
      <h2 className="text-2xl font-bold mb-2 text-center text-white">
        Entrar na <span className="text-cyan-400">SellAI Europe</span>
      </h2>
      <p className="text-slate-400 text-sm text-center mb-6">
        Acede ao teu painel de vendas e estúdio de IA
      </p>

      {errorMessage && (
        <div className="login-error">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="criador@exemplo.pt"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Palavra-passe
          </label>
          <input
            type="password"
            name="password"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500 transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-200 disabled:opacity-50 cursor-pointer"
        >
          {isLoading ? 'A entrar...' : 'Entrar no Studio'}
        </button>
      </form>

      <div className="login-switch">
        Não tens conta ainda?{' '}
        <button
          type="button"
          onClick={switchToRegister}
          className="login-switch-button"
        >
          Criar conta aqui
        </button>
      </div>
    </div>
  );
}

export default Login;
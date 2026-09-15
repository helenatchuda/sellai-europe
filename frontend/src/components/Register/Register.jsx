import React, { useState } from 'react';

function Register({ onRegister, switchToLogin, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Atualiza os dados dos campos do formulário
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
      await onRegister(formData);
      if (onClose) onClose();
    } catch (err) {
      console.error('Erro no registo:', err);
      setErrorMessage(
        err.message || 'Erro ao criar conta. Tenta novamente com outro e-mail.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container text-slate-100">
      <h2 className="text-2xl font-bold mb-2 text-center text-white">
        Criar Conta na <span className="text-cyan-400">SellAI Europe</span>
      </h2>
      <p className="text-slate-400 text-sm text-center mb-6">
        Começa a vender os teus produtos digitais no mercado europeu
      </p>

      {errorMessage && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm text-center">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Nome Completo 
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Ana Silva"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500 transition-colors"
          />
        </div>

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
            minLength={6}
            placeholder="Mínimo 6 caracteres"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-500 transition-colors"
          />
        </div>
         <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
           Confirmar Palavra-passe
          </label>
          <input
            type="password"
            name="confirmPassword"
            required
            minLength={6}
            placeholder="Mínimo 6 caracteres"
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
          {isLoading ? 'A criar conta...' : 'Criar Conta de Criador'}
        </button>
      </form>

      {/* Alternar para o modal de Login caso já tenha conta */}
      {switchToLogin && (
        <p className="register-footer-text">
          Já tens conta na plataforma?{' '}
          <button
            type="button"
            onClick={switchToLogin}
            className="register-switch-btn"
          >
            Entrar aqui
          </button>
        </p>
      )}
    </div>
  );
}

export default Register;
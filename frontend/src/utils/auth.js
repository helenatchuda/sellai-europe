export const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Função auxiliar para validar respostas HTTP
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res
    .json()
    .then((err) => Promise.reject(err || `Erro: ${res.status}`));
};

// 1. Registo de Novo Utilizador / Criador
export const register = ({ name, email, password , confirmPassword}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password,confirmPassword: confirmPassword}),
  }).then(checkResponse);
};

// 2. Login (Autenticação)
export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password}),
  })
    .then(checkResponse)
    .then((data) => {
      
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        return data;
      }
      return Promise.reject('Token não recebido do servidor.');
    });
};

// 3. Verificação do Token JWT (Check Token ao recarregar a app)
export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
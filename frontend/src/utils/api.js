class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this.headers = headers;
    this._accessToken = null; // Armazena o token em memória
  }

  //  Criar o método setAccessToken
  setAccessToken(token) {
    this._accessToken = token;
  }

  //  No método getHeader não pegamos mais do local storage, pega do this._accessToken
  getHeader() {
    return {
      ...this.headers,
      ...(this._accessToken
        ? { Authorization: `Bearer ${this._accessToken}` }
        : {}),
    };
  }

  // Método privado para validar as respostas HTTP do backend
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json().then((err) => Promise.reject(err || `Erro: ${res.status}`));
  }

  // 1. Obter todos os produtos
  getProducts() {
    return fetch(`${this._baseUrl}/products`, {
      method: 'GET',
      headers: this.getHeader(),
    }).then(this._checkResponse);
  }

  register(userData) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this.getHeader(),
      body: JSON.stringify(userData),
    }).then(this._checkResponse);
  }

  // 2. Criar um novo produto
  createProduct(productData) {
    return fetch(`${this._baseUrl}/products`, {
      method: 'POST',
      headers: this.getHeader(),
      body: JSON.stringify(productData),
    }).then(this._checkResponse);
  }

  // 3. Atualizar/Editar um produto existente
  updateProduct(id, productData) {
    return fetch(`${this._baseUrl}/products/${id}`, {
      method: 'PUT',
      
      headers: this.getHeader(),
      body: JSON.stringify(productData),
    }).then(this._checkResponse);
  }

  // 4. Apagar um produto
  deleteProduct(productId) {
    return fetch(`${this._baseUrl}/products/${productId}`, {
      method: 'DELETE',
      headers: this.getHeader(),
    }).then(this._checkResponse);
  }
}

export const api = new Api({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});
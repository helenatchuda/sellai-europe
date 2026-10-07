import React, { useState, useEffect } from 'react';

// Módulos de API e Autenticação
import * as auth from './utils/auth';
import { api } from './utils/api';

// Componentes
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import AICreator from './components/AICreator/AICreator';
import WhyEurope from './components/WhyEurope/WhyEurope';
import Pricing from './components/Pricing/Pricing';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Login from './components/Login/login';
import Register from './components/Register/Register';
import Popup from './components/Popup/Popup';
import AICreatorStudioPage from './components/AICreatorStudioPage/AICreatorStudioPage';
import AffiliatesPage from './components/Affiliates/AffiliatesPage';
import AnalyticsPage from './components/Analytics/AnalyticsPage';
import MultiLanguagePage from './components/MultiLanguagePage/MultiLanguagePage';
function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);

  // 1. Carregar produtos do backend
  const handleGetProducts = async () => {
    try {
      const data = await api.getProducts();
      setProducts(data);
    } catch (err) {
      console.error('Erro ao carregar produtos:', err);
    }
  };

  // 2. Verificar token ao recarregar a página (sessão persistente)
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      auth
        .checkToken(jwt)
        .then((user) => {
          setIsLoggedIn(true);
          setCurrentUser(user);
          api.setAccessToken(jwt); // Configura o token na instância da API
          handleGetProducts();     // Carrega os produtos do utilizador
        })
        .catch((err) => {
          console.error('Sessão expirada:', err);
          handleLogout();
        });
    }
  }, []);

  // 3. Função de Login
  const handleLogin = async ({ email, password }) => {
    const data = await auth.authorize({ email, password });
    if (data.token) {
      api.setAccessToken(data.token);
      const user = await auth.checkToken(data.token);
      setIsLoggedIn(true);
      setCurrentUser(user);
      setIsLoginOpen(false);
      handleGetProducts();
    }
  };

  // 4. Função de Logout
  const handleLogout = () => {
    localStorage.removeItem('jwt');
    api.setAccessToken(null);
    setIsLoggedIn(false);
    setCurrentUser(null);
    setProducts([]);
  };
  const handleRegister = async (data) => {
    await api.register(data);
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  if (window.location.pathname === '/ai-creator-studio') {
    return <AICreatorStudioPage />;
  }

  if (window.location.pathname === '/afiliados') {
    return <AffiliatesPage />;
  }

  if (window.location.pathname === '/analytics') {
    return <AnalyticsPage />;
  }

  if (window.location.pathname === '/multi-idioma-ia') {
    return <MultiLanguagePage />;
  }

  // 5. Criar Produto (Manual ou via IA)
  const handleAddProduct = async (newProductData) => {
    try {
      const createdProduct = await api.createProduct(newProductData);
      setProducts((prev) => [createdProduct, ...prev]);
    } catch (err) {
      console.error('Erro ao criar produto:', err);
    }
  };

  return (
    <div className="App min-h-screen bg-[#020b1c] text-slate-100 font-sans antialiased relative">
      <Header
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
        isLoggedIn={isLoggedIn}
        userEmail={currentUser?.email}
        onLogout={handleLogout}
      />

      <main>
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />

        <Product
          products={products}
          onAddProduct={handleAddProduct}
        />

        <AICreator onAddProduct={handleAddProduct} />
        <WhyEurope />
        <Pricing onOpenRegister={() => setIsRegisterOpen(true)} />
        <FAQ />
      </main>

      <Footer />

      {/* Modal de Login */}
      {isLoginOpen && (
        <Popup onClose={() => setIsLoginOpen(false)} className="auth-popup">
          <Login
            onLogin={handleLogin}
            onClose={() => setIsLoginOpen(false)}
            switchToRegister={() => {
              setIsLoginOpen(false);
              setIsRegisterOpen(true);
            }}
          />
        </Popup>
      )}

      {isRegisterOpen && (
        <Popup onClose={() => setIsRegisterOpen(false)} className="auth-popup">
          <Register
            onRegister={handleRegister}
            switchToLogin={() => {
              setIsRegisterOpen(false);
              setIsLoginOpen(true);
            }}
            onClose={() => setIsRegisterOpen(false)}
          />
        </Popup>
      )}
    </div>
  );
}

export default App;
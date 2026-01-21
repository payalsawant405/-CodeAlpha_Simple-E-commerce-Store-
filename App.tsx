
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import AuthPage from './pages/AuthPage';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          
          <footer className="bg-white border-t border-gray-100 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 mb-4">
                    LUMINA LUXE
                  </h3>
                  <p className="text-gray-500 max-w-sm">
                    Redefining excellence in modern essentials. We believe in quality that lasts and design that inspires.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Shop</h4>
                  <ul className="space-y-2 text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Electronics</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Fashion</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Home Decor</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Office Essentials</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-500 text-sm">
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact Us</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Shipping Policy</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">Returns</a></li>
                    <li><a href="#" className="hover:text-indigo-600 transition-colors">FAQ</a></li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-xs">
                © {new Date().getFullYear()} Lumina Luxe. All rights reserved. Designed for excellence.
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;

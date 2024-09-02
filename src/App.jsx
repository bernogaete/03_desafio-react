import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import pizzas from './script/pizzas';
import Header from './components/Header';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState(pizzas.map(pizza => ({ ...pizza, quantity: 0 })));

  const calcularTotal = () => {
    return cart.reduce((total, pizza) => total + (pizza.price * pizza.quantity), 0);
  };

  return (
    <>
     <Header/>
      <div className="nav-container">
        <Navbar 
          setCurrentView={setCurrentView}
          total={calcularTotal()} // Pasar el valor calculado
        />
      </div>
      
      {currentView === 'home' && <Home cart={cart} setCart={setCart} />}
      
      {currentView === 'cart' && (
        <div className='cart-container'>
          <Cart cart={cart} setCart={setCart} />
        </div>
      )}

      <Footer />
    </>
  );
}

export default App;

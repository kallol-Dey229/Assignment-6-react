import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import ProductCardContainer from './components/ProductCardContainer/ProductCardContainer';

const dataPromise = fetch('Data.json').then(res => res.json());

function App() {

  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <Banner></Banner>
      
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <Products cartCount={cartCount} setCartCount={setCartCount} dataPromise={dataPromise}></Products>
      </Suspense>
    </>
  )
}

export default App

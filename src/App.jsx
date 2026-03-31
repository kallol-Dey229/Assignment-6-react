import { Suspense, useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import ProductCardContainer from './components/ProductCardContainer/ProductCardContainer';
import GetStared from './components/GetStarted/GetStared';
import TransparentPricings from './components/TransparentPricings/TransparentPricings';
import TransformWorkflow from './components/TransformWorkflow/TransformWorkflow';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const dataPromise = fetch('Data.json').then(res => res.json());
const GetStaredDataPromise = fetch('GetStartedData.json').then(res=>res.json());
const TransparentPricingPromise = fetch('TransparentPricing.json').then(res=>res.json());

function App() {

  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <Banner></Banner>
      
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <Products cartCount={cartCount} setCartCount={setCartCount} dataPromise={dataPromise}></Products>
      </Suspense>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <GetStared GetStaredDataPromise={GetStaredDataPromise}></GetStared>
      </Suspense>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <TransparentPricings TransparentPricingPromise={TransparentPricingPromise}></TransparentPricings>
      </Suspense>

      <TransformWorkflow></TransformWorkflow>

      <Footer></Footer>

      <ToastContainer />

    </>
  )
}

export default App

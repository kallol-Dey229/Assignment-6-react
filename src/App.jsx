import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

const dataPromise = fetch('Data.json').then(res => res.json());

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
            <Products dataPromise={dataPromise}></Products>
      </Suspense>
    </>
  )
}

export default App

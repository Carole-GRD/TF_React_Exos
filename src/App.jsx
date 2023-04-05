import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import productData from './data/product.json';

// import Welcome from './components/welcome/welcome'
// import ProductCollection from './components/product-collection/product-collection'
import Counter from './components/counter/counter';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Exos</h1>

      {/* <h2>Exo 01 - Welcome</h2>
      <Welcome name='Carole' age={45} /> */}

      {/* <h2>Exo 02 - Product Collection</h2>
      <ProductCollection products={productData} /> */}

      <h2>Exo 03 - Counter</h2>
      <Counter incr={1} />
      <Counter incr={5} />
    </div>
  )
}

export default App

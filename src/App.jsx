import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import productData from './data/product.json';

// import Welcome from './components/welcome/welcome'
// import ProductCollection from './components/product-collection/product-collection'
// import Counter from './components/counter/counter';
// import Calculator from './components/calculator-form/calculator-form';
// import TodoList from './components/todo-list/todo-list';
import Clock from './containers/clock/clock';

function App() {

  return (
    <div className="App">
      <h1>Exos</h1>

      {/* <h2>Exo 01 - Welcome</h2>
      <Welcome name='Carole' age={45} /> */}

      {/* <h2>Exo 02 - Product (Collection)</h2>
      <ProductCollection products={productData} /> */}

      {/* <h2>Exo 03 - Counter (State)</h2>
      <Counter incr={1} />
      <Counter incr={5} /> */}

      {/* <h2>Exo 04 - Calculator (Form)</h2>
      <Calculator /> */}

      {/* <h2>Exo 05 - TODO List</h2>
      <TodoList /> */}

      <h2>Exo 06 - Clock</h2>
      <Clock />
    </div>
  )
}

export default App

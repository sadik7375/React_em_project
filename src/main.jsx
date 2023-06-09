import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Product from './components/Product/Product'







function App() {
 

  return (

  <><Header></Header>
  <Shop></Shop></>

 

   
  )
}

export default App



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

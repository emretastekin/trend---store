import { useState } from "react"
import Cart from "./components/Cart/Cart"
import Hero from "./components/Hero/Hero"
import Header from "./components/Layout/Header"
import Products from "./components/Products/Products"
import CartProvider from "./context/CartProvider"
import FormInputs from "./components/Form/FormInputs"

function App() {

  const [cartIsShow, setCartIsshow] = useState(false);

  const showCartHandler = () => {
    setCartIsshow(true)
  }

  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsshow(false)
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products />
    </CartProvider>
  )
}

export default App

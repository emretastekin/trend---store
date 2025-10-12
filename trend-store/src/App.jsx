import { useState } from "react"
import Cart from "./components/Cart/Cart"
import Hero from "./components/Hero/Hero"
import Header from "./components/Layout/Header"
import Products from "./components/Products/Products"

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
    <div className="App">
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Hero />
      <Products />
    </div>
  )
}

export default App

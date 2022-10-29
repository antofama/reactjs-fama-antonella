import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from "./Context/CartContext";
import CheckOut from "./components/CheckOut/CheckOut";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/category/:categoryId' element={<ItemListContainer />}/>
          <Route path='/item/:id' element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path="/checkout"/> 
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

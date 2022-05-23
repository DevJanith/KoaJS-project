import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import Customer from "./pages/Customer";
import Trader from "./pages/Trader";
import Cart from "./pages/Cart";
import Inventory from "./pages/Inventory";
import Promotion from "./pages/Promotion";
import Purchase from "./pages/Purchase";
import WishList from "./pages/WishList";
import CartTable from "./pages/CartTable";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="customer" >
              <Route index element={<Customer />} />
            </Route>
            <Route path="trader" >
              <Route index element={<Trader />} />
            </Route>
            <Route path="cart" >
              <Route index element={<Cart />} />
            </Route>
            <Route path="inventory" >
              <Route index element={<Inventory />} />
            </Route>
            <Route path="promotion" >
              <Route index element={<Promotion />} />
            </Route>
            <Route path="purchase" >
              <Route index element={<Purchase />} />
            </Route>
            <Route path="wish-list" >
              <Route index element={<WishList />} />
            </Route>
            <Route path="cartTable" >
              <Route index element={<CartTable />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

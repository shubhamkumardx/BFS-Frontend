import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Product from "./Components/Products/Product";
import OrderProcess from "./Components/OrderProcess/OrderProcess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product/>} />
          <Route path="/Orderprocess" element={<OrderProcess/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

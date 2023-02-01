import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import MainNavigation from "./Shared/MainNavigation";
import ProductDetails from "./Pages/ProductDetails";
import MyCart from "./Pages/MyCart";
import NotFound from "./Shared/NotFount";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path={"/"} exact>
            <HomePage />
          </Route>
          <Route path={"/products"} exact>
            <Products />
          </Route>
          <Route path={"/products/:pId"} exact>
            <ProductDetails />
          </Route>
          <Route path={"/myCart"} exact>
            <MyCart />
          </Route>
          <Route path={"/mycart/payment"} exact>
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

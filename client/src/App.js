import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/main.css";

import Home from "./components/landingPage";
import Navbar from "./components/header/navBar";
import About from "./components/header/about";
import Admin from "./components/admin/dashboard";
import Register from "./components/header/register";
import Farmer from "./components/farmers/farmerDashboard";
import Products from "./components/products";
import PageNotFound from "./components/pageNotFound";
import Contact from "./components/header/contact";
import saleProduct from "./components/farmers/saleProduct";
import productDetails from "./components/farmers/productDetails";
import productStorage from "./components/productStorage";
import saleStatus from "./components/farmers/saleStatus";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/farmer" component={Farmer} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/farmer/:prod_id" component={saleProduct} />
        <Route exact path="/farmer/sales/:id" component={saleStatus} />
        <Route exact path="/products/:id" component={productDetails} />
        <Route exact path="/storage" component={productStorage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

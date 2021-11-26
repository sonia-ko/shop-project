import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/header/HeaderComponent";
import ProductDescptionPage from "./pages/productDescriptionPage/ProductDescriptionPage";
import AllProductsPage from "./pages/allProducts/AllProductsPage";
import PageNotFound from "./pages/404Page/PageNotFound";
import LiveSupport from "./pages/support/LiveSupport";
import OurBlog from "./pages/blog/OurBlog";
import OurCareers from "./pages/careers/OurCareers";
import AboutUs from "./pages/aboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import LoginPage from "./pages/account/LoginPage";
import ShoppingCartPage from "./pages/shoppingCart/shoppingCartPage";
import { useRouteMatch } from "react-router";

function App() {
  const { path } = useRouteMatch();

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Redirect exact from="/" to="/products" />
          <Route exact path="/products">
            <AllProductsPage />
          </Route>

          <Route exact path={`/product/:id?`}>
            <ProductDescptionPage />
          </Route>
          <Route exact path="/support">
            <LiveSupport />
          </Route>
          <Route exact path="/blog">
            <OurBlog />
          </Route>
          <Route exact path="/careers">
            <OurCareers />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/404">
            <PageNotFound />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/cart">
            <ShoppingCartPage />
          </Route>
          <Route>
            <AllProductsPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

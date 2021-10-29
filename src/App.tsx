import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/header/HeaderComponent";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import PageNotFound from "./pages/404Page/PageNotFound";
import LiveSupport from "./pages/SupportPage/LiveSupport";
import OurBlog from "./pages/Blog/OurBlog";
import OurCareers from "./pages/Careers/OurCareers";
import AboutUs from "./pages/AboutUsPage/AboutUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Header> </Header>
        <Switch>
          <Redirect exact from="/" to="/products" />

          <Route path="/products" render={() => <AllProductsPage />} />
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
          <Route>
            <AllProductsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Contacts from "./components/header/contacts/ContactsComponent";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
import Header from "./components/header/HeaderComponent";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage";
import PageNotFound from "./pages/404Page/PageNotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Header> </Header>
        <Switch>
          <Redirect exact from="/" to="/products" />
          <Route
            path="/products"
            render={() => (
              <React.Fragment>
                <AllProductsPage />
              </React.Fragment>
            )}
          />
          <Route>
            <PageNotFound> </PageNotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Components/Context/AuthProvider";
import CartProvider from "./Components/Context/CartProvider";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import AdminDashboard from "./Components/Pages/AdminDashboard/AdminDashboard";
import AdminRoute from "./Components/Pages/AdminRoute/AdminRoute";
import Cart from "./Components/Pages/Cart/Cart";
import Dashboard from "./Components/Pages/Dashboard/Dashboard/Dashboard";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Home from "./Components/Pages/Home/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Login/Register/Register";
import PrivateRoute from "./Components/Pages/PrivateRoute/PrivateRoute";
import Purchase from "./Components/Pages/Purchase/Purchase";
import Explore from "./Components/Pages/Shared/Explore/Explore";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/explore">
                <Explore showAll={true} />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/about-us">
                <AboutUs />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <AdminRoute path="/admin-dashboard">
                <AdminDashboard />
              </AdminRoute>
              <PrivateRoute path="/purchase/:id">
                <Purchase />
              </PrivateRoute>
              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;

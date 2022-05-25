
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import Topbar from './components/topbar/Topbar';
import UserList from './pages/home/UserList/UserList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import User from './pages/home/User/User';
import NewUser from './pages/newpage/NewUser'
import ProductList from './pages/productList/ProductList';
import Product from './pages/Products/Product';
import NewProduct from './pages/newProduct/NewProduct';



function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/Products">
          <ProductList/>
          </Route>
          <Route path="/Product/:ProductId">
            <Product/>
          </Route>
          <Route path="/newProduct">
            <NewProduct/>
          </Route>
         
          
         
        </Switch>
    
      </div>
    </Router>
  );
}

export default App;

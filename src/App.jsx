import logo from './logo.svg';
import './App.css';
import ProductsContainer from './containers/ProductsContainer';
import { EcommerceProvider } from './context/EcommerceContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App ">
      <Router>
          <EcommerceProvider>
            <Routes>
              <Route exact path={"/productos"} element={<ProductsContainer/>}/>
              <Route exact path={"/productos/:busqueda"} element={<ProductsContainer/>}/>
            </Routes>
          </EcommerceProvider>
      </Router>
    </div>
  );
}

export default App;

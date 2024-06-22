import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import About from './pages/About';
import Contact from './pages/Contact';
import { Cart } from './pages/Cart/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { CatalogueContextProvider } from './context/CatalogueContext';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CatalogueContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/catalog" exact element={<Catalogue/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/contact" exact element={<Contact/>}/>
          <Route path="/cart" exact element={<Cart/>}/>
          <Route path="/checkout" exact element={<Checkout/>}/>
          <Route path="/login" exact element={<Login/>}/>
          <Route path="/register" exact element={<SignUp/>}/>
        </Routes>
        <Footer />
      </Router>
      </CatalogueContextProvider>
    </div>
  );
}

export default App;
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignuo from './Pages/LoginSignuo';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div >
 
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Shop/>}/> 
    <Route path='/mens' element={<ShopCategory category="men"/>}/> 
    <Route path='/womens' element={<ShopCategory category="women"/>}/> 
    <Route path='/kids' element={<ShopCategory category="kid"/>}/> 
    <Route path='/product' element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignuo/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;

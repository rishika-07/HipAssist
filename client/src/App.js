import Navbar from './Components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,Route,
} from "react-router-dom";
import Company from './Pages/Company';
import Product from './Pages/Products';
import JoinUs from './Pages/JoinUs';
import UseCase from './Pages/UseCase';
import GetDemo from './Pages/GetDemo';
import Home from './Pages/Home';
import Login from './Pages/Login';
function App() {
  return (
    <div className='app'>
      <Navbar/>
     <Routes>
      <Route path="/Company" element={<Company />}/>
      <Route path="/Products" element={<Product/>}/>
      <Route path="/JoinUs" element={<JoinUs />}/>
      <Route path="/UseCase" element={<UseCase />}/>
      <Route path="/GetDemo" element={<GetDemo />}/>
      <Route path="/Login" element={<Login />}/>
      <Route path="/" element={<Home />}/>
      </Routes>   
    </div>
  );
}

export default App;

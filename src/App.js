// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from './Com/Home';
import About from './Com/About';
import Countact from './Com/Countact';
import Blog from './Com/Blog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Home/>} />
      <Route path='/About' element={ <About/>} />
      <Route path='/Countact' element={ <Countact/>} />
      <Route path='/Blog' element={ <Blog/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

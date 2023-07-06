// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes ,Route } from "react-router-dom";

import Navbars from './Common/NavBar/NavBar';
import { Agents } from './Pages/Agents/Agents';
import { ListProperty } from './Pages/ListOfProperty/ListProperty';
import UploadProperty from './Pages/UploadProperty/UploadProperty'
import LoginForm from './Outh/Login/LoginForm';
import Home from './Pages/Home/Home';
import UploadAgents from './Pages/UploadAgents/UploadAgents';
import UploadProject from './Pages/UploadProject/UploadProject';
import Properties from './Pages/Properties/Properties';

function App() {
  return (
   
    <BrowserRouter>
     <Navbars/>
    <Routes>
      <Route path='/Agents' element={ <Agents/>} />
      <Route path='/Properties' element={ <Properties/>} />
      <Route path='/Home' element={ <Home/>} />
      <Route path='/ListProperty' element={ <ListProperty/>} />
      <Route path='/UploadProperty' element={ <UploadProperty/>} />
      <Route path='/' element={ <LoginForm/>} />
      <Route path='/UploadAgents' element={ <UploadAgents/>} />
      <Route path='/UploadProject' element={ <UploadProject/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './BasicExample';
import Basic from './Basic';
import View from './View';
import Viewdetails from './Viewdetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<Basic/>}></Route>
     <Route path='/view' element={<View/>}></Route>
     <Route path='/viewdetails/:id' element={<Viewdetails/>}></Route>
   </Routes>
   </BrowserRouter>
   
    </div>
  );
}

export default App;

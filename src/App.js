import React,{Component} from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Register from './pages/Register';
import Login from './pages/Login'
function App() {
  return (
    <Router>
      <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Register' element={< Register />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route>
                 </Routes>
          </Router>
  );
}

export default App;

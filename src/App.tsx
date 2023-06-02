import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import { Main  } from './pages/main';
import { Error } from './pages/erro';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { CreatePost } from './pages/create-post/CreatePost';

function App() {
  return (
    <div className="App">
  <Router>
    <Navbar/> 
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='*' element={<Error />} />
      <Route path='/login' element={<Login />} />
      <Route path='/createPost' element={<CreatePost />} />
   
    </Routes>
  </Router>
    </div>
  );
}

export default App;

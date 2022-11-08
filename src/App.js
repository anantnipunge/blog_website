import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Topbar from './components/topBar/Topbar';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Sidebar from './components/sidebar/Sidebar';
import Register from './pages/register/Register';

function App() {

  const user = false; //psuedo user.
  return (
      <Router>
      <Topbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/write" element={user ? <Write/> : <Register />} />
          <Route exact path="/register" element={user ? <Home/> : <Register />} /> 
          <Route exact path="/login" element={user ? <Home/> : <Login />} /> 
          <Route exact path="/settings" element={ user ? <Settings/> : <Register />} /> 
          <Route exact path="/post/:postID" element={<Single />} /> 
          <Route exact path="/sidebar" element={<Sidebar />} /> 
        </Routes>
      </Router >
  );
}

export default App;

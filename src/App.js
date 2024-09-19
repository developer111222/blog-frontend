// App.js
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Userprofile } from './actions/userAction';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveAppBar from './components/header/Header';
import Home from './components/home/Home';
import Signup from './components/authenticate/signup';
import Login from './components/authenticate/Login';
import AdminDashboard from './components/dashboard/AdminDashboard';
import FriendRequest from './components/websocket/SocketCon';
import ProtectedRoute from './utils/ProtectedRoute';
import store from './store';
import { useSelector } from 'react-redux';
import Profile from './components/authenticate/Profile';
import BlogCreate from './components/blog/create/BlogCreate';


function App() {

 

  return (
    <div className="App">
      <Router>
        {/* Navbar */}
        <ResponsiveAppBar  />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProtectedRoute component={Profile } />} />
          <Route path="/create-blog" element={<ProtectedRoute component={BlogCreate } />} />
          {/* <Route path="/admin" element={<AdminDashboard />} /> */}
       
          <Route path="/admin" element={<ProtectedRoute component={AdminDashboard} requireAdmin={true} />} />

       
          {/* <Route 
            path="/socket" 
            element={
              <ProtectedRoute>
                <FriendRequest />
              </ProtectedRoute>
            } 
          /> */}
        </Routes>
      </Router>

      {/* Global Toast Notification Configuration */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;

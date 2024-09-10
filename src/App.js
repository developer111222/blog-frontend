import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from './components/authenticate/signup';
import Login from './components/authenticate/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ResponsiveAppBar from './components/authenticate/test';


function App() {
  return (
    <div className="App">

<Router>
  <ResponsiveAppBar/>
  <Routes>
    <Route path="/" element={<Signup/>} />
    <Route path="/login" element={<Login/>} />
    
  </Routes>
</Router>


{/* Global ToastContainer Configuration */}
<ToastContainer
        position="top-right"
        autoClose={3000} // Closes after 3 seconds
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

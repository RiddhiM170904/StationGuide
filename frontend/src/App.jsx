import React, { useEffect } from 'react' 
import Herosection from './Pages/Herosection'
import LoginPage from './Pages/LoginPage';
import Register from './Pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import chatbotsvg from './assets/svg/chatbot.svg';
import { useNavigate, Outlet } from 'react-router-dom';
import RailwayStations from './Pages/stations';
import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<Register />} />
        <Route path='/Stations' element={<RailwayStations/>} />

        {/* This route is just for testing protected routes it can be removed later when there is a route other than login or signup */}
        <Route element={<ProtectedRoute />}>
          <Route path="/logged-in" element={<div className='flex items-end justify-center w-screen h-screen p-10'><h1 className='text-red-500 text-7xl'>Logged in</h1></div>} />
        </Route>

      </Routes>
    </Router>

    {/* <div className='fixed bottom-0 right-0 z-50 m-4 cursor-pointer'>
      <img src={chatbotsvg} alt="chatbot" className='w-16 h-16' />
    </div> */}

</>
  )
}

export default App;



export function ProtectedRoute() {
  const navigate = useNavigate();

  // Async function to verify the token
  const verifyToken = async () => {
    try {
      const res = await fetch('http://localhost:3000/auth/verify', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      const data = await res.json();
      console.log('Token Verification error:', data.error);  // For debugging

      if (data.error || res.status === 400 || res.status === 500) {
        navigate('/Login');
      }

      if (res.status === 400 || res.status === 500) {
        navigate('/Login');
      }
    } catch (error) {
      console.error('Error verifying token:', error);
      navigate('/Login');
    }
  };

  useEffect(() => {
    verifyToken();
  }, [navigate]);

  // If everything is fine, render the protected content
  return <Outlet />;
}
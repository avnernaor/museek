import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import ChatPage from "./pages/chat/ChatPage";


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnBoarding1 from './pages/on_boarding/OnBoarding';


//1 Real Future App
// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Register />} />
//         <Route path="/onboarding" element={<OnBoarding1 />} />
//       </Routes>
//     </Router>
//   );
// }
 
//2 Tests
function App() {
  return <Home/>;
}

export default App;
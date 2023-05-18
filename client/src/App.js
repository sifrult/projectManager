import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './utils/useAuthContext';

// pages & components
import Signup from './pages/Signup';
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Input from "./pages/Input";
import Nav from "./components/Nav";
import Login from './pages/Login';

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/input" element={<Input />} />
          <Route path="/signup" element={!user ? <Signup /> : <Navigate to='/' />} />
          <Route path="/login" element={!user ? <Login /> : <Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

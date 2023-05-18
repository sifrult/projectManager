import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components

import Signup from './pages/Signup'
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Input from "./pages/Input";
import Nav from "./components/Nav";
import Login from './pages/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Nav /><Main /></>} />
          <Route path='/projects' element={<><Nav /><Projects /></>} />
          <Route path='/input' element={<><Nav /><Input /></>} />
          <Route
            path="/signup"
            element={<><Nav /><Signup /></>}
          />
          <Route
            path="/login"
            element={<><Nav /><Login /></>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

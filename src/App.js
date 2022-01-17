import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Pages/Nav';
import Attorney from './Pages/Attorney';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import Contact from './Pages/Contact';
import Estate from './Pages/Estate';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/attorney' element={<Attorney />} />
          <Route exact path='/estate' element={<Estate />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

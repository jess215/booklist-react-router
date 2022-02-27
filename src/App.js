import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Books from './pages/Books'
import NewBook from './pages/NewBook'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Navbar/>
    </div>
  );
}

export default App;

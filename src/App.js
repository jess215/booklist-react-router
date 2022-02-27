import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Books from './pages/Books'
import NewBook from './pages/NewBook'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/books' element={<Books/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/new_book' element={<NewBook/>}/>
      </Routes>
    </div>
  );
}

export default App;

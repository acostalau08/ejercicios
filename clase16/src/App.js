import{ Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './home';
import Perritos from './Guaguaus'
import Gaticos from './miaumiaus'
import NotFound from './notFound';



function App() {
  return (
  
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='Perritos' element={<Perritos/>}/>
    <Route path='Gaticos' element={<Gaticos/>}/>
    <Route path='*' element={<NotFound/>}/>
   </Routes>
  
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Demo/Home';
import Details from './details';
import Details2 from './details2';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details' element={<Details />} />
        <Route path='/details2' element={<Details2 />} />
      </Routes>
    </>
  );
}

export default App;
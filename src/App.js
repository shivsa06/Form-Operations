import './App.css';
import PersonalDetails from './components/PersonalDetails'
import HighSchool from './components/HighSchool'
import Intermidiate from './components/Intermidiate'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/personalDetails' element={<PersonalDetails></PersonalDetails>}></Route>
        <Route path='/highSchool' element={<HighSchool></HighSchool>}></Route>
        <Route path='/intermidiate' element={<Intermidiate></Intermidiate>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

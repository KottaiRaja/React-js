import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Card } from './components/Tech/card';
import { Congrats } from './components/Congrats/congrats_card';
import { Hello } from './components/Hello/Hello';
import { League } from './components/League/league';
import { Feedback } from "./components/Feedback/Feedback";
import { Fruit_count } from './components/Fruit_count/fruit_count';
import { Count } from './components/Count/Count';
import { Thanks } from './components/Thanks/Thanks';
import { Json } from './components/json/json';







function App() {
  return(

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hello/>} />
        <Route path='/Congrats' element={<Congrats/>} />
        <Route path='/League' element={<League/>} />
        <Route path='/Tech-Card' element={<Card/>} />
        <Route path="/Feedback" element={<Feedback/>} />
        <Route path="/Fruit_count" element={<Fruit_count/>} />
        <Route path='/Count' element={<Count/>} />
        <Route path='/Thanks' element={<Thanks/>} />
        <Route path='/Json' element={<Json/>} />

      
      </Routes>
    </BrowserRouter>
    
      
  );
}

export default App;

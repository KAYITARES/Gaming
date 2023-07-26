
import {Routes, Route} from 'react-router-dom';
import Home from '../src/pages/welcome';
import SignUp from '../src/pages/SignUp';
import Login from '../src/pages/Login';
import Game from '../src/pages/Game';
import Rank from '../src/pages/Rank'
import './App.css'

function App() {
 

  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>

      <Route path='/login' element={<Login/>}/>
      <Route path='/game' element={<Game/>}/>
      <Route path='/rank' element={<Rank/>}/>
    </Routes>
  )
}

export default App

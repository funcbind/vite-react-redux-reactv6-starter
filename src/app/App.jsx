import './App.css';
import { Navbar } from './navbar';
import {
  Outlet
} from 'react-router-dom'; 

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Outlet/>
      </div>  
    </>
  )
}

export default App

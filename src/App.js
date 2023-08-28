import Layout from "./components/Layout";
import { Routes,Route } from "react-router-dom";
import './App.scss'
import './components/Layout/index.scss'
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Sidebar from './components/Sidebar'


function App() {
  return (
     
<div className="container">
<Sidebar />
<Home/>
<About/>
</div>
  )
}

export default App;



import Layout from "./components/Layout";
import { Routes,Route } from "react-router-dom";
import './App.scss'
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  return (
      <>
    
      <Layout/>
            {/* <Route path="/" element={<Layout/>}> */}
          {/* <Route path="home" element={<Home/>} />
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
        </Route> */}
    
      </>
  );
}

export default App;

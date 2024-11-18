import {Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Contact from "./Contact";
import NavigationSection from "./NavigationSection";
import NewIT from "./NewIT";
import NoPage from "./NoPage";
import Hello from "./Hello";
import Digital from "./Digital";
import Home from "./Home";
import About from './About';

function App()
{

return (

  <>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='about/newIt' element={<NewIT/>}/>
          <Route path='about/digital' element={<Digital/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<NoPage />}/>
        </Route>
      </Routes>
    
  
  </>
);



}

export default App;


import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
// import {Routes, Route, Link, BrowserRouter} from 'react-router-dom'
function App(){

  return(
    <>
    <Navbar />

<Routes>
  <Route path="/products" element = {<Product />} />
  <Route path="/contact" element = {<Contact />} />
  <Route path="/about" element = {<About />} />
</Routes>

    </>
  );




}

export default App;
import React from 'react'
import {Routes, Route, Link , BrowserRouter} from "react-router-dom"
import '../components/Products.css'

const Product = () => {
  return (
    <div>
      
<h1>Product Page</h1>

<div className='main'>

    <table className='table'>
        <th className='heading-table' >Product ID</th>


       <tr className='row'> <Link to="/1">1111</Link></tr>
       <tr> <Link to="/2">1112</Link></tr>
       <tr> <Link to="/3">1113</Link></tr>
       <tr> <Link to="/4">1114</Link></tr>
       <tr> <Link to="/5">1115</Link></tr>
       <tr> <Link to="/6">1116</Link></tr>
       <tr> <Link to="/7">1117</Link></tr>
       <tr> <Link to="/8">1118</Link></tr>
       <tr> <Link to="/9">1119</Link></tr>
       <tr> <Link to="/10">11110</Link></tr>
       <tr> <Link to="/11">11111</Link></tr>
       <tr> <Link to="/12">11112</Link></tr>
       <tr> <Link to="/13">11113</Link></tr>
       <tr> <Link to="/14">11114</Link></tr>

    </table>



</div>



    </div>
  )
}

export default Product

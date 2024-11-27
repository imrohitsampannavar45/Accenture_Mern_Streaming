import React, { useState } from 'react'
import axios from "axios"
function Form() {
  const [inputs, setInputs] = useState({})
  const handleChange = (e) => {
    setInputs(prevInputs => ({ ...prevInputs, [e.target.name]: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs)
    axios.get("http://localhost:7002/insertBlog", { params: inputs }).then(data => console.log(data)).catch(err => console.log("error=", err))
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        Blog Title:<input type="text" name="txtTitle" value={inputs.txtTitle} onChange={handleChange} /> <br />
        Blog Category:<input type="text" name="txtCategory" value={inputs.txtCategory} onChange={handleChange} /><br />
        Blog Description:<input type="textarea" name="txtDescription" value={inputs.txtDescription} onChange={handleChange} /><br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form

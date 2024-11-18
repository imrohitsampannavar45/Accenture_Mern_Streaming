import { useState } from "react"

export default function Form(){
   let [fullName, setFullName] = useState("Rohit");
   
   let handlenameChange= (event) =>{
    console.log(event.target.value);
    setFullName(event.target.value)
   }


    return (
        <form >
            <input type="text" placeholder="Enter your full name" value={fullName} onChange={handlenameChange} />
       <button>Submit</button>
       
        </form>
    )
}
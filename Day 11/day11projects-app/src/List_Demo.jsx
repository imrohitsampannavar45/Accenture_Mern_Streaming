import React from "react";
import { useState } from "react";

function List_demo()
{
    const list = ["apple", "orange","mango", "kiwi", "pineapple"]
    const [name,setName]= useState("John");
    const [age,setAge] = useState(18);
 
        function changeName(event){
            setName(event.target.value);
        }

function changeAge(event){
        setAge(event.target.value);
}

        return(
            <>
            <ul>
                    {list.map((data,i)=>(
                        <li key={i}>{i} === {data}</li>
                    ))}

            </ul>
            
            <hr />
<h1>Onchaneg and  State management of values and indexing </h1>

            <p>
                Name is :  {name} and age is {age}
            </p>
            <input type="text" value={name} onChange={changeName} />
            <input type="Number" value={age} onChange={changeAge} />
            <p>{name}</p>
            <p>{age}</p>
            
            </>
        )


}

export default List_demo;
import {useState} from 'react'
 
function Counter(){
    const [count,setCount] = useState(0);
 
    return(
        <>
        <p data-testid="count">Count:{count}</p>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=> setCount(count-1)}>Decrement</button>
        </>
    );
}
 
export default Counter;
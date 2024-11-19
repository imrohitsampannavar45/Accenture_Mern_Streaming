import {useState, useCallback} from "react"

function UseCallBack(){
    const[count, setCount] = useState(0);
    const handleClick = useCallback(()=> {
    setCount(count+1);
}, [count])
return (
    <>
    <h1>use Callback Hook</h1>
    <p>Count : {count}</p>
<button onClick={handleClick}>Increment</button>
    </>
)
}
export default UseCallBack;
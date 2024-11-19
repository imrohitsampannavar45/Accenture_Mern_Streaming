import React, {useReducer} from "react"
const initialState = {count : 0};

function reducer(state, action){
    switch(action.type){
        case "increment":
            return {count : state.count + 1};
        case "decrement":
            return {count : state.count - 1};
            default:
                throw new Error();
    }
}

function Use_Reducer_Ex(){
    const [state, dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <h1>Use Reducer Hook</h1>
            <h1>Count: {state.count}</h1>
            <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
        </div>
    )
}
export default Use_Reducer_Ex;
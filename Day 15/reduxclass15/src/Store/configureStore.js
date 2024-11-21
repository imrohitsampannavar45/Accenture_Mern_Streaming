import { createStore } from "redux";
import rootReducer from "../Reducer/rootReducer";


export default function configureStore(intialState)
{
    return createStore(
        rootReducer,
        intialState
    )
}



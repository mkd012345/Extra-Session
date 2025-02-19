import { useReducer } from "react";

function Function1(state, action) {
    switch (action.x1) {
        case "changename":
            return { ...state, name: action.y1 };
        case "changeage":
            return { ...state, age: action.y1};
        default:
            throw new Error("Unhandled action type");
    }
}

function ReducerExmp() {
    const [{name,age}, dispatch] = useReducer(Function1, {
        name: "Default",
        age: 45,
    });
    return (
        <>
        <input 
        value={name}
        onChange={(e) => dispatch({ x1: "changename", y1: e.target.value})}
        />
        <br/>
        {name}
        <br/>
        <input 
        value={age}
        onChange={(e) => dispatch({ x1: "changeage", y1: e.target.value})}
        />
        <br/>
        {age}
        </>

    );
}
export default ReducerExmp;
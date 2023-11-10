import React, {useReducer} from 'react'
import {useSampleDispatch, useSampleState} from "./SampleContext";
/*
type Color = "RED" | "GREEN" | "BLUE";
type State = {
    count: number;
    text: string;
    color: string;
    isGood: boolean;
}
type Action=
    {type:"SET_COUNT"; count:number}
    |{type:"SET_TEXT"; text:string}
    |{type:"SET_COLOR"; color:Color}
    |{type:"TOGGLE_GOOD"};
function reducer(state: State, action: Action):State{
    switch (action.type) {
        case "SET_COUNT":
            return{
                ...state,
                count: action.count
            };
        case "SET_TEXT":
            return{
                ...state,
                text: action.text,
            };
        case "SET_COLOR":
            return{
                ...state,
                color: action.color
            };
        case "TOGGLE_GOOD":
            return{
                ...state,
                isGood: !state.isGood
            };
        default:
            throw new Error("Unhandled action");
    }
}*/
function ReducerSample(){
    const state = useSampleState();
    const dispatch = useSampleDispatch();
    function setCount(){dispatch({type:"SET_COUNT", count: state.count+1})}
    function setColor(){dispatch({type:"SET_COLOR", color: "RED"})}
    function setText(){dispatch({type:"SET_TEXT", text: "hello my name is changho"})}
    function toggleGood(){dispatch({type:"TOGGLE_GOOD"})}
return (
   <div>
       <p>count : {state.count}</p>
       <p>color : {state.color}</p>
       <p>text : {state.text}</p>
       <p>isGood : {state.isGood?'true':'false'}</p>
       <div>
           <button onClick={setCount}>SET_COUNT</button>
           <button onClick={setColor}>SET_COLOR</button>
           <button onClick={setText}>SET_TEXT</button>
           <button onClick={toggleGood}>TOGGLE_GOOD</button>
       </div>
   </div>
);
}
export default ReducerSample;
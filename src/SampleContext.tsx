import React, {createContext, Dispatch, useContext, useReducer} from 'react'
type Color = "RED"|"BLUE"|"GREEN"|"YELLOW"|"BLACK";
type State = {
    count: number,
    color: Color,
    text: string,
    isGood: boolean,
};

type Action =
    |{type:"SET_COUNT"; count: number}
    |{type:"SET_TEXT"; text: string}
    |{type:"SET_COLOR"; color: Color}
    |{type:"TOGGLE_GOOD"};

type SampleDispatch = Dispatch<Action>;
const SampleStateContext = createContext<State>({
    count:0,
    color:"BLACK",
    text:"",
    isGood:false,
    }
);
const SampleDispatchContext = createContext<SampleDispatch>(() => null);

function reducer(state: State, action: Action):State {
    switch (action.type) {
        case "SET_COUNT":
            return{
                ...state,
                count: action.count
            };
        case "SET_TEXT":
            return{
                ...state,
                text: action.text
            };
        case "SET_COLOR":
            return{
                ...state,
                color:action.color
            }
        case "TOGGLE_GOOD":
            return{
                ...state,
                isGood: !state.isGood
            };
        default:
            throw new Error("Unhandled Action");
    }
}
export function SampleProvider({children}: {children:React.ReactNode}){
    const[state, dispatch] = useReducer(reducer, {
        count: 0,
        text: "hello",
        color: "BLUE",
        isGood:true,
    });
    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    );
}

export function useSampleState():State{
    const state = useContext(SampleStateContext);
    return state;
}
export function useSampleDispatch():SampleDispatch{
    const dispatch = useContext(SampleDispatchContext);
    return dispatch;
}
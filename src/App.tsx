import React, {useState} from 'react';
import {Provider, useSelector, useDispatch} from "react-redux";
import './App.css';
import Counter from "./Counter";
import ReducerSample from "./ReducerSample";

function App() {


    return (
        <>
            <ReducerSample/>
        </>
    );
}
export default App;

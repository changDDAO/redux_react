import React, {useState} from 'react';
import {Provider, useSelector, useDispatch} from "react-redux";
import './App.css';
import Counter from "./Counter";
import ReducerSample from "./ReducerSample";
import {SampleProvider} from "./SampleContext";

function App() {


    return (
        <>
            <SampleProvider>
            <ReducerSample/>
            </SampleProvider>
        </>
    );
}
export default App;

import React, {useState} from 'react';
import {Provider, useSelector, useDispatch} from "react-redux";
import './App.css';
import Counter from "./Counter";

function App() {


    return (
        <>
            <Counter/>
        </>
    );
}
export default App;

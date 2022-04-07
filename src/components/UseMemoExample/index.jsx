import { useState, useMemo } from "react";
import React from "react";

const UseMemoExample = () => {

    const [value, setValue]=useState(7);
    const [inputValue, updateInputValue]=useState(0);

    const incValue =()=>{
        setValue(value+1);
    }

    const onInputChange = (event) => {
        updateInputValue(event.target.value); 
    }

    const calculateResult = () => {
        console.log("hi")
        return inputValue*5;
    }

    // const result=calculateResult();
    const result=useMemo(()=>{
        return calculateResult();
    }, [inputValue])

    return <>
        <div>Value: {value} <button onClick={incValue}>Increment</button></div>
        <input type="text" value={inputValue} onChange={onInputChange} />
        <div>result= {result}</div> 
    </>
}

export default UseMemoExample;
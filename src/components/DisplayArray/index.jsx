
import React, {useState} from "react";

const DisplayArray = (props) => {
    const [index, setIndex]= useState(0);

    const changeValue = () => {
        if (index===props.list.length-1)
            setIndex(0);
        else
            setIndex(index+1);
    }
    
    return <div onClick={changeValue}>{props.list[index]}</div>
}

export default DisplayArray;
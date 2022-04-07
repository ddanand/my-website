import React, {useState} from 'react';

const Toggle = () => {
    const[value, updateValue]= useState("On");

    const clickHandler=()=>{
        // if (value=="On") {
        //     updateValue("Off");   
        // }
        // else { 
        //     updateValue("On");   
        // }
        updateValue(value=="on"?"off":"on");  
    }
    
    return <div onClick={clickHandler}>{value}</div>
}
export default Toggle;

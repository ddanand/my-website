import React, {useState} from 'react';

const Counter = (props) => {
    const [value, updateValue] = useState(props.value);

    const incrementHandler = () => {
        updateValue(value+1);
    };

    const decrementHandler = () => {
        updateValue(value-1);
    }

    return (
        <div>
            <div>value: {value} </div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
    );
}

export default Counter;



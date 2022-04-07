import React, {useState} from 'react';

const Filter = (props) => {

    const [accessValue, updateAccessValue] = useState();
    const [arr, updateArr]= useState(props.items);

    const onInputChange = (event) => {
        updateAccessValue(event.target.value); 
        const newArr = props.items.filter((arrayItem) => {
            return arrayItem.toLowerCase().includes(event.target.value.toLowerCase());
        })
        updateArr(newArr);
    }
    return(
        <div>
            <label htmlFor="filter">Search:</label>
            <input type="text" id="filter" name="fruitNames" value={accessValue} onChange={onInputChange}/>
            {arr.map((item, index)=>{
                return <div key={item}>{item}</div>;
            })}
        </div>
    )
}

export default Filter;

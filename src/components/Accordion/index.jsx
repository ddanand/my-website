import React, {useState} from 'react';

const Accordion = (props) => {
    const [isOpen, updateOpen] = useState(false);

    const clickHandler = () => {
        updateOpen(isOpen ? false : true);
    }
    
    return (
        <div>
            <div onClick={clickHandler}>
                {props.title} 
            </div>
            <div>{isOpen && props.body}</div>
        </div>    
    );
}

export default Accordion;

import React, {useState, useEffect} from 'react';
import classes from "./styles.module.css";

const Header = () => {
    useEffect(() => {
        funActivity();
    }, [])

    const [task, setTask] = useState({});

    const funActivity = () => {
        fetch("https://www.boredapi.com/api/activity/")
            .then((result) => result.json())
            .then((json) => {
                setTask(json);
            });     
    }
    
    return (
        <header className={classes.header}>
            <button onClick={funActivity} className={classes.button}> Feeling Bored? Click Me! </button>
            <div> {task.activity} </div> 
        </header>   
    )
}

export default Header;
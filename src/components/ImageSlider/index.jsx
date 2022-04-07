import React, {useState} from "react";
import classes from "./styles.module.css";

const imageData = [
    {
        id:1,
        img:"https://picsum.photos/200/300",
        name:"Image1",
    },
    {
         id:2,
         img:"https://picsum.photos/id/237/200/300",
         name:"Image2",
     },
     {
         id:3,
         img:"https://picsum.photos/seed/picsum/200/300",
         name:"Image3",
     },
     {
         id:4,
         img:"https://picsum.photos/200/300?grayscale",
         name:"Image4",
     }
 ];

const ImageSlider = () => {
    const [imageIndex, setImageIndex]= useState(0);
    const dotClickHandler = (index)=>{
        setImageIndex(index);
    }

    const previousImageHandler = () => {
        if (imageIndex === 0)
            setImageIndex(imageData.length-1);
        else
            setImageIndex(imageIndex-1);
    }

    const nextImageHandler =() => {
        if (imageIndex === imageData.length-1)
            setImageIndex(0);
        else
            setImageIndex(imageIndex+1);
    }

    return <div>
        <div className={classes.center}>{imageData[imageIndex].name}</div>
        <img className={classes.imageStyling} src ={imageData[imageIndex].img}></img>
        <div className={classes.buttonContainer}>
            <button onClick={previousImageHandler}>{"<-"}</button>
            <button onClick={nextImageHandler}>{"->"}</button>
        </div>
        <div className={classes.dotContainer} >
            {imageData.map((item, index)=>{
                return <span key={item.id} onClick={() => dotClickHandler(index)} className={classes.dot}></span>
            })}
        </div>
    </div>
}

export default ImageSlider;

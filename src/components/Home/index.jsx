import React from 'react';
import Toggle from "../Toggle";
import Filter from "../Filter";
import Counter from "../Counter";
import Accordion from "../Accordion";
import DisplayArray from "../DisplayArray";
import ImageSlider from "../ImageSlider";
import UseMemoExample from "../UseMemoExample";
import Header from "../Header";

const Home = () => {
    return (
        <>
           <Header/>         
           <Toggle/>
           <Filter items={["Mango", "Apple", "Banana", "Cherry", "Watermellon" ]}/>
           <Filter items={["Delhi", "Mumbai", "Punjab",  ]}/>
           <Counter value={4}/>
           <Counter value={400}/>
           <Accordion title="Click me" body="I am body" />
           <DisplayArray list ={[10, 20, 30, 40, 50]}/>
           <ImageSlider/>
           <UseMemoExample/>
        </>
    )
}
export default Home;

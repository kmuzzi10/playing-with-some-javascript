import React from "react";


const Greeting = ()=>{
    let textColor = "";
    let greeting = ""
    
    
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 1 && hour < 6) {
      textColor = "black";
      greeting = "good night"
    }
    else if (hour >= 6 && hour < 12) {
      textColor = "red";
      greeting = "good morning"
    } else if (hour >= 12 && hour < 18) {
      textColor = "green"
      greeting = "good afternoon"
    } else {
      textColor = "blue"
      greeting = "good evening"
    }
    const colorCss = {
      color: textColor
    
    }

    return <h1 style={colorCss}>{greeting}</h1>
};

export default Greeting;
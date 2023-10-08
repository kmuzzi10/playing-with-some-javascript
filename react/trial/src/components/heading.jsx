import React from "react";

function Heading(){
    const name = "muzammil";
    const lname = "khan";
    const name1 = name+lname;
    const style1 = {
        color: "#ff004d",
        fontSize:"5rem",
        marginLeft:"70px",
        marginTop:"400px"
    };
    
    return <h1 style={style1} >{name1}</h1>
}

export default Heading;
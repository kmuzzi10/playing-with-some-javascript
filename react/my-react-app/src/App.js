import React from "react";
import ReactDOM from "react-dom";
import App from './App';


// const customCss = {
//   color:"red",
//   fontSize:"4rem"
// }

// customCss.color = "blue"        




// ReactDOM.render(
//   <div>
//     <h1 style={customCss}>Lists</h1>        {/* by changing css through object */}
//     <div>
//       {/* inline css  */}
//     <img style={{width:"100px",height:"100px"}}   src="https://assets.bonappetit.com/photos/643f14b5259b5fd1329ed8f5/1:1/w_3987,h_3987,c_limit/Noodle_Type_Ramen_Finished_Still_Select_COMP.jpg" alt=""></img>
//     <img style={{width:"100px",height:"100px"}} src="https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19-e1609271249794.jpg" alt=""></img>
//     <img style={{width:"100px",height:"100px"}} src="https://static.toiimg.com/thumb/52467119.cms?width=1200&height=900" alt=""></img>
//     </div>
//   </div>,
//   document.getElementById('root')
// )

let textColor = "";
let greeting = ""


const date = new Date();
const hour = date.getHours();
if(hour>=1 && hour<6){
  textColor = "black";
  greeting = "good night"
}
else if(hour>=6 && hour<12){
textColor = "red";
greeting = "good morning"
}else if(hour>=12 && hour<18 ){
textColor = "green"
greeting = "good afternoon"
}else{
  textColor = "blue"
  greeting = "good evening"
}

const colorCss = {
  color : textColor
}
ReactDOM.render(
  <div>
    <h1 style={colorCss}>{greeting}</h1>
  </div>,
  document.getElementById("root")
)






export default App;
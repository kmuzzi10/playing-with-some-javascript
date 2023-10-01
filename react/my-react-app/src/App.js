import React from "react";
import ReactDOM from "react-dom";
import App from './App';

ReactDOM.render(
  <div>
    <h1 className="heading">Lists</h1>
    <div>
    <img  className="img-class" src="https://assets.bonappetit.com/photos/643f14b5259b5fd1329ed8f5/1:1/w_3987,h_3987,c_limit/Noodle_Type_Ramen_Finished_Still_Select_COMP.jpg" alt=""></img>
    <img className="img-class" src="https://thewoksoflife.com/wp-content/uploads/2020/04/homemade-chinese-egg-noodles-19-e1609271249794.jpg" alt=""></img>
    <img className="img-class" src="https://static.toiimg.com/thumb/52467119.cms?width=1200&height=900" alt=""></img>
    </div>
  </div>,
  document.getElementById('root')
)


export default App;
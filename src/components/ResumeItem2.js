import React from "react";

const ResumeItem2 =({title, Icon, value}) =>{
    return <div className="ResumeItem" id="Item2">
       <div className="Header">
            <h1>{title}</h1>
            <Icon></Icon>
        </div>
        <div className="Total">{value}</div>
        </div>
      
}




export default ResumeItem2;

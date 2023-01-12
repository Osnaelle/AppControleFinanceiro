import React from "react";

const ResumeItem3 =({title, Icon, value}) =>{
    return <div className="ResumeItem" id="Item3">
       <div className="Header">
            <h1>{title}</h1>
           < Icon/>
        </div>
        <div className="Total">{value}</div>
        </div>
}




export default ResumeItem3;

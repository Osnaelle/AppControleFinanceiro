import React from "react";






const ResumeItem =({title, Icon, value}) =>{
    return <div className="ResumeItem">
        <div className="Header">
            <h1>{title}</h1>
            <Icon/>
        </div>
        <div className="Total">{value}</div>
        </div>
}




export default ResumeItem;

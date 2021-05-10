import React from "react";

export class Scorebelow70 extends React.Component{
render(){
    var players=this.props.players;
    var players70=[];
    return(
        players.map((item)=>
        {
            if(item.score<=70)
            {
                players70.push(item);
            }
        }),
        players70.map((item)=>
        {
return(
<div>
    <li>Mr. {item.name} <span>{item.score}</span></li>
    </div>        
        )})  
    )
}
}

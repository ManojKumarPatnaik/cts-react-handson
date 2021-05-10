import React from 'react'
export class ListofPlayers extends React.Component{
render(){
    var players=this.props.players;
    return(    
        players.map((item)=>
        {
return(
<div>
    <li>Mr. {item.name} <span>{item.score}</span></li>
    </div>        
        )})       
);     
}
}





 


import React from "react";

export class ListofIndianPlayers extends React.Component{
    render(){
        var IndianPlayers=this.props.IndianPlayers;
            return(    
                IndianPlayers.map((item)=>
                {
        return(
        <div>
            <li>Mr. {item}</li>
            </div>        
                )})       
        );     
    }
}

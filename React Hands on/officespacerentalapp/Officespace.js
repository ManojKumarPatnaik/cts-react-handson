import React from "react";
import Officeimg from './Officeimg.png';
const element="Office Space"
const jsxatt=<img src={Officeimg} width="25%" height="25%" alr="Office Space"/>
const ItemName={Name:"DBS",Rent:50000,Address:"Chennai"}
export class Officespace extends React.Component{
    render(){
        let colors=[];
        if(ItemName.Rent<=60000)
        {
            colors.push("red");
        }
        else{
            colors.push("green");
        }
    return(
        <div>
            <center>
        <h1>{element} , at Affordable Range</h1>
        {jsxatt}
        <h1>Name: {ItemName.Name}</h1>
        <h3 style={{color:colors[0]}}>Rent: Rs. {ItemName.Rent}</h3>
        <h3>Address: {ItemName.Address}</h3>
        </center>
        </div>
    )
}
}
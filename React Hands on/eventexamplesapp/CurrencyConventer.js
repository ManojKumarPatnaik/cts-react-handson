import React from 'react'
export class CurrencyConverter extends React.Component{
    constructor(){
        super();
        this.state={number:0};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.change=this.change.bind(this);
    }
    
    change(event){
        this.setState(
         {number:event.target.value}
        );  
    }
    handleSubmit(){
        var num=parseInt(this.state.number);
        alert("Converting to Euro Amount is "+(num*0.011));
    }
render(){
    return(
    <form onSubmit={this.handleSubmit}>
        <table>
            <h2 style={{color:"green"}}>Currency Convertor!!!</h2>
            <tr>
                <td><label>Amount:</label></td>
                <td><input onChange={this.change}type="text"/><br/></td>
            </tr>
            <tr>
                <td><label>Currency!</label></td>
                <td><input type="text"/></td>
            </tr>
            <tr>
                <td></td>
                <td><input type='submit'/></td>
            </tr>
        </table>
    </form>
    )
}
}
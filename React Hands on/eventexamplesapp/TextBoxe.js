import React from 'react'
export class TextBoxe extends React.Component{
    constructor()
    {
        super();
        this.state={number:0};
    }
    increment=()=>{
        this.setState((prevState,props)=>{
            this.message();
            return {number:prevState.number+1}
            
        });
    }
    message=()=>{
        alert("Hello Member!");
    }
    decrement=()=>{
        this.setState((prevState,props)=>{
            return {number:prevState.number-1}
        });
    }
    saywelcome=()=>{
       alert("welcome");
    }
    clickonme=()=>{
        alert("I was clicked");
    }
render(){
    return(        
        <div>
            <p>{this.state.number}</p>  
            <button onClick={this.increment}>Increment</button><br/>
            <button onClick={this.decrement}>Decrement</button><br/>
            <button onClick={this.saywelcome}>Say Welcome</button><br/>
            <button onClick={this.clickonme}>Click on me</button>
        </div>
    )
}
}
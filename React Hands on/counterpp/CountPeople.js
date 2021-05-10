import React from 'react'


export class CountPeople extends React.Component
{
    constructor(){
        super();
        this.state={
            entrycount:0,
            exitcount:0,
            c:0
        };
    }  
    
    updateEntry=()=>{
        this.setState((prevState,props)=>(
        {
            entrycount: prevState.entrycount+1
        }));
    }
      
    updateExit=()=>{
        this.setState((prevState,props)=>(
        {
            exitcount: prevState.exitcount+1
        }));
    }
    render(){
        return(
            <div style={{padding:"10px"}}>
                <center>
            <table>
                <tr>
                    <td>
<button style={{backgroundColor:"lightgreen"}} onClick={this.updateEntry}>Login</button>
<span>{this.state.entrycount} People Entered!!</span> 
</td>
<td>
    
</td>
<td>
<button style={{backgroundColor:"lightgreen"}} onClick={this.updateExit}>Exit</button>
<span>{this.state.exitcount} People Left!!</span> 
</td>
</tr>
</table>
</center>
</div>
        )
    }
}
import React, { Component } from 'react'

class Clicker extends Component{
    state={rand:1}

    randGenerator=e=>{
        this.setState({rand:Math.floor(Math.random()*10)});
        }
        render(){
            return(
            <div>
                <h1> {this.state.rand}</h1>
            <h1> {this.state.rand===7?'you win!':'try again'}</h1>
            <button onClick={this.randGenerator}>Click</button>
            </div>
            )
        }
        
}
export default Clicker;
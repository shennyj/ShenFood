import React,{Component} from 'react'
import {ThemeContext} from './App'
//class component
export default class Counter extends Component{
    constructor(props){
        super(props)//called everytime u override class constructor
        this.state={
            count:props.initialCount
        }
    }
    //everything in class will be a react component to render
    render(){
        return (
            <ThemeContext.Consumer>
            {style=>(
                <div>
                    <button style={style} onClick={()=>this.changeCount(-1)}>-</button>
                    <span>{this.state.count}</span>
                    <button style={style} onClick={()=>this.changeCount(1)}>+</button>
                </div>
            )}
            </ThemeContext.Consumer>
        )
    }

    changeCount(amount){
        //these two increment counter by 2
        //prevState requires function
        this.setState(prevState=>{
            return { count:prevState.count+amount}
        })
        this.setState(prevState=>{
            return { count:prevState.count+amount}
        })
        
        
        // this.setState({count:this.state.count+amount})//take in an object that'll be added to the this.state obj
    }
}
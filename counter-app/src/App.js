import { Component } from 'react';
import './App.css';

export default class CounterApp extends Component{
  constructor(){
    super();
    
    this.state = {
      counter : 0
    }
  }

  handleDecrease = ()=>{
    this.setState({
      counter:this.state.counter-1
    })
  }

  handleIncrease = ()=>{
    this.setState({
      counter:this.state.counter+1
    })
  }

  handleReset = ()=>{
    this.setState({
      counter:0
    })
  }

  render(){
    return(
      <div>
      <h1>Counter App</h1>
      <div className="counter-display">{this.state.counter}</div>
      <div className="btn-container">
        <button className="btn" onClick={this.handleIncrease}>+</button>
        <button className="btn" onClick={this.handleDecrease}>-</button>
        <button className="btn" onClick={this.handleReset}>Reset</button>
      </div>
    </div>
  );
}
}
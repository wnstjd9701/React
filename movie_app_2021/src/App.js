import React from "react";

class App extends React.Component{
  state = {
    count: 0    
  
  };
  // using setState : To call render function
  add = () => {
    this.setState(current => ({count: current.count + 1}));
    console.log(this.state.count);
  };
  minus =() => {
    this.setState(current => ({count: current.count - 1}));
    console.log(this.state.count);
  };
  // 3
  componentDidMount(){
    console.log("Component rendered");
  }
  // 2
  componentDidUpdate(){
    console.log("I just Update");
  }

  // 1
  render(){
    return (
    <div>
      <h1>The number is : {this.state.count} </h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}
export default App;

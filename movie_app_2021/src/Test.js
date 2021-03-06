import React from "react";

class Test extends React.Component{
    state = {
        count : 0,
        arr: 0
    }
    getCount = () => {
        this.setState(current => ({count: current.count + 1}));
    }
    getTest = () => {
        this.setState(current => ( { arr: current.arr + 2}));
    }
    render(){
        return (
            <button id="test" onClick = {this.getCount} >How many do you click? {this.state.count}</button>
        )
    }
}

/* function Test(){
    return <div>Hello</div>
}

--> App.js
return <Test />
*/

export default Test;
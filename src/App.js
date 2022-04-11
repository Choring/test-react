import React, {Component} from "react";
import Child from "./Child";

class App extends Component {
    state = {
        name: 'parent',
        childName: "child"
    }
    changeName = () => {
        this.setState({name: "parent changed", childName: "child changed too"})
    }
    render(){
        console.log('parent')
        const {name, childName} = this.state
        return (
            <div className="App">
            <h1>{name}</h1>
            <button type="button" onClick={this.changeName}>change name</button>
            <Child name={childName}></Child>
            </div>
        )
    }
}

export default App;
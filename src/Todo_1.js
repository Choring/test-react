import React, { Component } from 'react';

class Todo extends Component {
    constructor (props) {
        super(props) //부모로부터 전달받는 데이터
        // 데이터 초기화
        this.state = { 
            name : "cleaning",
            done: false ,
            age : 25,
            description: "cleaning my room on weekends"
        }
    }
    
    //이벤트 핸들러 함수
    changeTodoName = () => {
        this.setState( {
            name: "learning react",
            age : 32,
            done: true
        })
    }

    //HTML 템플릿
    render() {
        const { name, done, description, age } = this.state
        const { user } =this.props
        return (
            <>
                <h2> user: {user}</h2>
                <h3> name: {name}</h3>
                <h4> age : {age}</h4>
                <h5> done: {done ? "finished" : "ongoing"} </h5>
                <p> description : {description} </p>
                <button type="button" onClick={this.changeTodoName}>change todo name</button>
            </>   
        )
    }
}

export default Todo;
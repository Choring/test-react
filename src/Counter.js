import React, {Component} from "react"

export default class Counter extends Component {
    render(){
        this.props = {user: 'choring'}
        console.log(this.props)
        return(
            <>
                <h1>props 변경하기</h1>
            </>
        )
    }

}

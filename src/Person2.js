import React, {Component} from 'react'

class Person2 extends React.Component {
    state = {
        name: 'sunrise',
        age: 23,
        friends: [
            'victoria',
            'daniel',
            'hanna'
        ]
    }
    render() {
        retrun (
            <div>
                <button onClick = {this.displayInfo}>신상정보 확인하기</button>
            </div>
        )
    }
}

export default Person2;
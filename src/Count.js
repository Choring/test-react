import React, {Component} from "react";

export default class Counte extends Component {
    state = {
        count : 0
    }
    increase = () => {
        const {count} = this.state
        console.log(`before updating state: ${count}` )
        // this.setState( { count: count + 1} )
        this.setState ( (prevState) => {
            return {count : prevState.count +1 }
        })
        console.log(`after updateing state: ${count}` )
    }
    increaseMultiple = () => {
        // 업데이트 되지 않는구간 //
        this.increase() 
        // updater 사용시 this.state.count 는 업데이트 되지 않지만 prevState는 계속 업데이트 된다.
        this.increase() 
        // updater 사용시 this.state.count 는 업데이트 되지 않지만 prevState는 계속 업데이트 된다.
        this.increase() 
        // updater 사용시 this.state.count 는 업데이트 되지 않지만 prevState는 계속 업데이트 된다.

        console.log(`right after event: ${this.state.count}`)
        // --------------------------------------------------------- //
    }
    render () {
        // 여기서 state가 업데이트 된다.
        // 모든 이벤트가 종료되는 이 시점에서 state를 변경하고 remder 함수를 한번 만 호출한다.
        console.log('counter')
        const {count} = this.state
        console.log(`state in render funtion: ${count}` )
        return(
            <>
                <h1>{count}</h1>
                <button type="button" onClick={this.increase} > increase count </button>
            </>
        )
    }
}
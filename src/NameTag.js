import React, {Component} from "react";

export default class NameTag extends Component {
    state = {
        name: "Initial name"
    }
    changeName = () => {
        // this.state.name ="CHanged name" // 직접 호출하면 redner는 실행 X  (잘못된 방법)
        this.setState( {name: "Changed name"})
    }
    render() {
        console.log('NameTag')
        const {name} = this.state
        return(
            <>
                <h1>{name}</h1>
                <button type="button" onClick={this.changeName}>change name</button> 
                {/* this.changeName() : () 을 넣으면 무한루프 발생 */}
            </>

        )
    }
}
import React, {Component} from "react";

// export default class App extends Component {
//     state = {
//         cnt: 0
//     }
//     countNumber = () => {
//         this.setState( {cnt: this.state.cnt +1} )
//     }

//     render() {
//         const {cnt} = this.state
//         return(
//             <div className="App">
//                 <h1>카운트: {cnt}</h1>
//                 <button type="button" onClick={this.countNumber}>Chage name</button>
//             </div>
//         )
//     }
// }

export default class App extends Component {
    state = {
        title: "변경전 제목"
    }
    changeTitle = () => {
        this.state.title = '제목 업데이트'
    }
    render () {
        const {title} = this.state
        return(
            <div className="App">
                <h1>제목: {title}</h1>
                <button type="button" onClick={this.changeTitle}>change Title</button>
            </div>
        )
    }
}
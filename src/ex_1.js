import React, {Component} from "react"
import Friend  from "./Friend"


const friends = [
        { name:"Choring", age:13, city:"Seoul"},
        { name:"Dooring", age:15, city:"Busan"},
        { name:"Shara", age:18, city:"Deagu"},
        { name:"Ank", age:19, city:"Japan"},
        { name:"Wang", age:20, city:"China"},
        { name:"Smith", age:22, city:"U.S.A"},
]

// export default class App extends Component {
//     render() {
//         return(
//             <>
//                 <Friend name="Choring" age={13} city="Seoul"/>
//                 <Friend name="Dooring" age={15} city="Busan"/>
//                 <Friend name="Shara" age={18} city="Deagu"/>
//                 <Friend name="Ank" age={19} city="Japan"/>
//                 <Friend name="Wang" age={20} city="China"/>
//                 <Friend name="Smith" age={22} city="U.S.A"/>
//             </>
//         )
//     }
// }

export default class App extends Component {
    render() {
        return (
            <>
            {friends.map( (friend, id) => {
                return <Friend key={id} name={friend.name} age = {friend.age} city={friend.city} />
            } )}

            </>
        )

    }
}
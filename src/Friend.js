import React from 'react'; // 라이브러리 호출

export default class Friend extends React.Component {
    render() {
        const {name, age, city} =this.props

        return (
            <>
                <h3>{name}</h3>
                <h3>{age}</h3>
                <h3>{city}</h3>
                <h3>---------------------------------------------</h3>
            </>
        )
    }
}

import React, {Component} from 'react'

class Alert extends React.Component {
    render() {
        function win(){
            console.log('이벤트 핸들러 연습');
    }
        retrun (
            <a href= "#" onClick={handleClick}>Click</a> 
        );
    }
}

export default Alert;
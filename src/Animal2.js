import React from 'react';

// function Animal2(props){
    function Animal2({type, name, size, sound, appearence}) {
    return(
            <div>
                <h1>동물 정보</h1>
                <h3>타입: {type}</h3>
                <h3>이름: {name}</h3>
                <h3>크기: {size}</h3>
                <h3>소리: {sound}</h3>
                <h3>생김새: {appearence}</h3>
            </div>
    )
}



export default Animal2;
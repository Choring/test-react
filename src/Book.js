import React, { Component } from 'react';

class Book extends Component {
    render() {
        const book ={
            title : '해리포터',
            author : '조앤K롤링',
            summary :'해리포터가 마법사로 성장해나가는 과정을 그린 이야기',
            genre: '판타지 소설',
            release: '2003년 9월 4일',
            ISBN: '1234567890'
        }
    return (
            <div>
                <h1>title: {book.title}</h1>
                <h2>author: {book.author}</h2>
                <h2>summary: {book.summary}</h2>
                <h2>genre: {book.genre}</h2>
                <h2>release: {book.release}</h2>
                <h2>ISBN: {book.ISBN}</h2>
            </div>
        )
    }
}
export default Book;
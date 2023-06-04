import  { Component } from 'react';

import bookList from '../assets/books' 
import BookList from './lists/BookList';
import BookListComp from './lists/BookListComp';

class MainComponent extends Component {
    
    state = {
        books : bookList,
        showBooks : true
    }
    
    
    render() {
        
        var style = {
			border: "1ps solid",
			backgroundColor: 'black',
			borderRadius: '5px',
			color: 'white',
			width: '300px',
			margin: '40px auto',
			textAlign: 'center'
		};
        let books = null;
        
        if (this.state.showBooks) {
            books = <BookListComp 
                books = {this.state.books}
            />
        }
        
        return (
			<div className="App">
                <h1 style={style}>Book list</h1>
                {books}
            </div>
        );
    }
}

export default MainComponent;
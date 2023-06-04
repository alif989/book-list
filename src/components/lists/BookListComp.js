import React, { Component } from 'react'
import Book from "../representational/Book";

export default class BookListComp extends Component {
    
  render() {
    return (
        this.props.books.map((book,index) => {
            return(
              <Book/>   
            );
        })
    )
  }
}

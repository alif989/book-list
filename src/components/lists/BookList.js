import React from "react";
import Book from "../representational/Book";
 
const bookLists = (parms) => {
    return (
        parms.books.map((book,index) => {
            return(
              <Book/>   
            );
        })
    );
    
    
    
}

export default bookLists;
import React, {useState} from "react";
import DetailCard from "./DetailCard";

function BookCard({book}) {

    return (
    <>  
        <div className="book">

            <div><p>{book.volumeInfo.publishedDate}</p></div>
            <div><img src={book.volumeInfo.imageLinks === undefined ? 'https://via.placeholder.com/400' : book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/></div>

            <div>
            <span>{book.volumeInfo.title}</span>
            </div>
            <DetailCard book={book} />
        </div>
    </>
    )
}

export default BookCard
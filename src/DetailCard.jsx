import React from "react";

function DetailCard({book}) {

    return (
        <div className="card">
            <div className='card-inner'>
                    <div className='info'>
                        <h2>{book.volumeInfo.title}</h2><br></br>
                        <h4>{book.volumeInfo.authors}</h4><br></br>
                        <h6>{book.volumeInfo.publisher}</h6><br></br>
                        {/* <h6 className='description'>{book.searchInfo.textSnippet}</h6> */}
                        {/* {console.log(typeof book.searchInfo.textSnippet)}
                        <h6 className='description'>{book.searchInfo.textSnippet == undefined ? 'No Data available' : book.searchInfo.textSnippet}</h6> */}
                        
                        <a href={book.volumeInfo.previewLink} target_='blank'><button className="btn">more</button></a>
                    </div>                
            </div>
        </div>
    )   
}

export default DetailCard
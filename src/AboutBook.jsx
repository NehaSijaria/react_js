import React from 'react'

  const dynamicTitle = "title1";

const BookName = () => {

  return (
    <article className='book'>
      <Image />
      <BookTitle />
    </article>
  );
}
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg";
  
const Image = () => (
  <img
    src={img} height="100px"
    alt=""
  />
);
//impicit Return //inline styling
//const BookTitle = () => <h1 style={{color:"red"}}>Book title</h1>;//only expression that return vale , no statement
const BookTitle = () => <h1>{dynamicTitle}</h1>

export default BookName
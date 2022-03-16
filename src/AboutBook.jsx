import React from 'react'

const BookName = () => {
  return (
    <article className='book'>
      <Image />
      <BookTitle />
    </article>
  );
}

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg" height="100px"
    alt=""
  />
);
//impicit Return
const BookTitle = () => <h1 style={{color:"red"}}>Book title</h1>;

export default BookName
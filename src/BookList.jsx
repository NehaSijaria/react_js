import React from "react";
import AboutBook from "./AboutBook";


//if we have 2 books
const book1 = {
  title:'title1',
  img:"https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
}
const book2 = {
  title: "title2",
  img: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
};

const BookList = () => {
  return (
    <section className="bookList">
      {/* <AboutBook title="title1" /> */}
      <AboutBook img={book1.img} title={book1.title} />
      <AboutBook img={book2.img} title={book2.title} />
    </section>
  );
};


export default BookList;

import React from 'react'

const Greeting = () => {
  return (
    <div>
      <Message />
      <Person />
    </div>
  );
}
//Explicit Return
const Person = () => <h4>John</h4>
//Implicit Return
const Message = () => {
  return (
    <p>Hello</p>
  )
}

export default Greeting;

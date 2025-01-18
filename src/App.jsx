import * as React from 'react'

import './App.css'

function App() {
  const products = [
    {
      id: 1,
      title: 'React Book',
      price: 45
    },{
      id: 2,
      title: 'Redux Book',
      price: 50
    },{
      id: 3,
      title: 'JavaScript Book',
      price: 30
    },{
      id: 4,
      title: 'Java Book',
      price: 20
    },{
      id: 5,
      title: 'C# Book',
      price: 15
    }
  ]


  return (
    <>
      < Welcome />
      <List items={products} />
    </>
  )
}

function Welcome() {
  return(
    <h1>Hello, React</h1>
  )
}

function List(props) {
  return(
    <ul>
      {props.items.map(item => {
        return(
          <li key={item.id}>
            <p>{item.title} , <span>Price: {item.price.toLocaleString("en-US", {style:"currency", currency:"USD"})} </span></p>
          </li>
        )
      })}
    </ul>
  )
}

export default App

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

  function handleSrch(term){
    console.log(`term in partent is : ${term}`);
  }


  return (
    <>
      < Welcome />
      <Search onSearch={handleSrch} />
      <List items={products} />
    </>
  )
}

function Welcome() {
  return(
    <h1>Hello, React</h1>
  )
}


function Search(props){
  const [serachTerm, setSearchTerm] = React.useState('')

  function handleInput(e) {
    const newValue = e.target.value
    setSearchTerm(newValue)
    props.onSearch(newValue)
  }

  return(
    <>
      <label htmlFor="srch">Search:</label>
      <input type="text" id="srch" onInput={handleInput}/>
    </>
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

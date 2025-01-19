import * as React from 'react'

import './App.css'

function App() {
  const [serachTerm, setSearchTerm] = React.useState('')

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
    },{
      id: 6,
      title: 'Go Book',
      price: 30
    },{
      id: 7,
      title: 'Graphql Book',
      price: 40
    }
  ]

  function handleSrch(e){
    const newValue = e.target.value 
    console.log(newValue);
    setSearchTerm(newValue)
  }


  const matchProduct = products.filter(item => item.title.toLowerCase().includes(serachTerm.toLowerCase()))


  return (
    <>
      < Welcome />
      <Search onSearch={handleSrch} text={serachTerm} />
      <List items={matchProduct} />
    </>
  )
}

function Welcome() {
  return(
    <h1>Hello, React</h1>
  )
}


function Search({onSearch , text}){
  

  return(
    <>
      <label htmlFor="srch">Search:</label>
      <input value={text} type="text" id="srch" onInput={onSearch}/>

      <p>serching for {text}</p>
    </>
  )
}








function List({items}) {
  return(
    <ul>
      {items.map(item => {
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

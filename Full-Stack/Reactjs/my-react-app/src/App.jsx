import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount((count) => count + 1)
  const myDetails = { name: "Prashant", age: 20, image: "https://picsum.photos/seed/picsum/200/300" }
  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={handleClick}
          
        >
          Count is {count}
        </button>
        <p>{myDetails.name}</p>
        <p>{myDetails.age}</p>
        <img src={myDetails.image}/>
      </section>
    </>
  ) 
}

export default App

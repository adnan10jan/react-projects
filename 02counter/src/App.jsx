import { useState } from "react";

function App() {
  
  const[count, setCount] = useState(0)

  // let counter = 3

  const addValue = () => {
    //console.log("Clicked", Math.random());
    if (count < 20) {
    setCount(count + 1)
    }
  }

  const removeValue = () => {
      if(count > 0) {
      setCount(count - 1)
      }
  }

  return (
    <>
      <h1>adnan or react</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App

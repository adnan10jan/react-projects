import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "adnan",
    age: 23
  }
  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black rounded-xl'>Tailwind test</h1>
    <Cards username="adnan" someObj={newArr}/>
    {/* <Cards />  */}
    </>
  )
}

export default App

import { useState } from "react";

function Test () {
    const [count,setCount] = useState(0)
    const add = () => {
        setCount(count + 2)
    }
    console.log(count)
    console.log(setCount)
    return <>
     <p>Ajouter: {count}</p>
     <button onClick={add}>Incrementer</button>
 </>
}

export default Test
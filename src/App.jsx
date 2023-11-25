/*
  L'etat en react et les fonction hooks
  useState(): permet d'avoir un espace memoire qui sera partagé a chaque fois que le composant sera rendu par react
*/

import { useState } from "react"
function App() {

  const [count, setCount] = useState(0)
  function increment() {
    // setCount((c) => c+1)
    setCount((c) => c+3)
    setCount((c) => c+2)
  }
  const [person, setPerson] = useState({
    firsname: 'Abdellah',
    lastName: 'Kaba',
    age: 25
  })
    
  const addAge = () => {
    setPerson({...person, age: person.age + 2})
  }
  const setNom = () => {
    setPerson({...person, firsname: 'Mohamed'})
  }


 return <>
     <p>Prenom: {person.firsname}</p>
     <p>Nom: {person.lastName}</p>
     <p>Age: {person.age}</p>
     <button onClick={addAge}>Ajout Age</button> <br></br>
     <button onClick={setNom}>Change Prenom</button>

     <p>Nom: {count}</p>
     <button onClick={increment}>Increment l'Etat</button>

 </>
}


export default App


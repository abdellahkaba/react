/*
  Exemple d'un interpollation en react
*/
const title = "Bonjour les gens"
const todo = "Au révoir tout le monde !"
const style = {backgroundColor: 'blue', color: 'green'}

/*
  Les attribues liés aux évenements
*/

//un fonction qui va declancher un évenement
const handClick = () => {
    alert("Je vous salut tous")
}

/*
  Exemple d'utilisation d'une condition
*/
const showTitle = true
/*
  Utilisation d'un tableau avec une boucle à parcourir
*/

const tab = [
  "Presenter React",
  "Presenter Jsx",
  "Création des composants"
]

/*
  Interpollatioin d'une fonction comme une balise HTML
*/

const Title = ({color,children,hidden, ...props2}) => {
  if(hidden) {
    return null
  }
  /*
    on peut ajouter plusieurs attributs directement à un élement
  */
    const props = {
      id: 'Id',
      className: 'maclass'
    }
   return <h1 style={{color: color}} {...props} {...props2}>{children}</h1>
}

function App() {
    return <>
    <h1>
       {title}
    </h1>
    <h2 id="title" className="title" style={{color: 'red', backgroundColor: 'blue'}}>Salut Tout le monde !</h2>
    <h2  className={todo} style={style}>{todo}</h2>
    <button onClick={handClick} className="btn" style={{color: 'blue'}}>Cliquer</button>
     
    {showTitle ? console.log("Oui belle et bien") : console.log("Même pas !")}
    
      <ul>
           {tab.map(t => (<li key={t}>{t}</li>))}
      </ul>
    <Title color="red" hidden>Les enfants</Title>
    </>
}


/*
  Prémière utilisation de useState()
*/
import { useState } from "react"
function App() {

  const [count, setCount] = useState(0)
    
  const Increment = () => {
    setCount(count + 1)
  }

 return <>
     <p>Compteur: {count}</p>
     <button onClick={Increment}>Incrementer</button>
 </>
}

/* 
  On peut avoir plusieurs useState() dans une fonction
*/

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
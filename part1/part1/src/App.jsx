import Welcome from "./Components/Welcome";



const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}  

function MyButton() { 
  return(
    <button>
      soy un botón
    </button>

  );
  
}



const App =() => { 
    const name = 'Peter'
    const age = 10

    return(
      <div>
        <h1> Greeting</h1>
        <Hello name =' Maya' age={26 + 10} />
       <footer/>
       <MyButton />
       <Welcome message = "Hola welcome props" name ="Isabella" />
        
      </div>
    )
}

export default App

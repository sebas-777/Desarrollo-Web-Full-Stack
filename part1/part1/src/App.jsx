


const Hello = (props) => {

  return(
    <div>
      <p>Hello{props.name}</p>
    </div>
  )
}



const App =() => {

    return(
      <div>
        <h1> Greeting</h1>
        <Hello name =' George' />
        <Hello name = ' Daisy' />
        
      </div>
    )
}

export default App

import Welcome from "./Components/Welcome";
import { BrowserRouter as Router,Routes, Route,Link } from "react-router-dom";
import Contact from './Pages/Contact';
import AbouMet from "./Pages/AboutMe";
import Profile from "./Pages/Profile";



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
       <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li> 
            <li>
              <Link to="/contact">Contact</Link>
            </li> 
            <li>
              <Link to="/About-me">About Me</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-me"   element={<AbouMet />} />
          <Route path="/profile/:name" element={<Profile />} />
        </Routes>
       </Router> 
      </div> 

      
    )
}

export default App

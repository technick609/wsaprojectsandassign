// import React from 'react';
import './App.css';
import Main from './components/Class2/Main';
// import { useState } from 'react';
// import ClickButton from './components/ClickButton.jsx';
// import Message from './components/Message.jsx'; 

// function component
function App() {
  /*
  // Example 1:
  without JSX
  const element = React.createElement("h1", null, "Hello React!!");
  return element;
  */

  /*
  with JSX
  const element = <div className="App">Hello React!!</div>
  */


  /*
  // Example 2:
  // const greetings = "Hello React!!!!";
  // const element = <h1>{greetings}</h1>
  // return element;
  */


  /*
  // Example 3:
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>You clicked this {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click this</button>
    </div>
  )
  */

  /*
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Styling in JSX
  const style = {
    color: "white",
    fontSize: "24px",
    backgroundColor: "Red",
  }

  return(
    // We can use Fragments "<>...</>" instead of div element while retruning because, to group the elements inside the div without adding some extra un-necessary space to the DOM.  
    <>
      <h1>Welcome To Conditional Rendering Example</h1>
      {isLoggedIn ? <h1>Welcome Back!!</h1> : <h1>Please SignIn...</h1>}
      <button onClick={() =>{setIsLoggedIn(!isLoggedIn)}} style={style}>
      {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  )
  */

  /*
  // Without using component
  function ClickButton({count, handleClick}){
    return(
      <button onClick={handleClick}>Click this</button>
    )

  }
  */


  // const [count, setCount] = useState(0);



  return(
    <>
    {/* <h1>You clicked {count} times....</h1>
    <ClickButton count={count} handleClick = {() => setCount(count + 1)} />
    <Message name="Franklin" />
    <Message name="Michael" /> */}
 

    {/*
    <ProfileCard /> */}

     <Main />
    </>
  )
}

export default App;

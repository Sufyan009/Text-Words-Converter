import "./App.css";
// import { useState } from 'react';
import NavBar from "./navbar.js"
import TextForm   from "./TextForm";
// import About from "./About";

// const cars = ["Saab", "Volvo", "BMW"];
// const age = 15;
// if (age >= 18){
//   console.log("IS OVER AGE");
// }
// else{
//   console.log("IS UNDER AGE");
// }
// function MyButton() {
//   const [count, setCount] = useState(0);
//   function handleClick() {
//     setCount(count + 1);
//     // alert('You clicked me!');
//   }
//   return (
//     <button onClick={handleClick}>
//            Clicked {count} times

//     </button>
    
//   );
  
// };

// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 200,
// };

function App() {
  // const cars = ["Saab", "Volvo", "BMW", "Lembo", "Bughatti" ];

  // const age = 19;
  // const isGreen = true;
  return (
    <div className="App">
      <NavBar />
      <div>
      {/* <h1>Welcome to my app</h1> */}
      {/* <MyButton /> */}
      <br />
      <div className="container my-3">
      <TextForm heading="Enter text below to analyze." />
      </div>
       {/* <div className="container my-3">
      <About />
      </div> */}
      


    </div>
    
{/*     
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </> */}

      {/* <MyButton /> */}
      {/* <User name="Sj" age={25} email="sufianjellani007@yahoo.com" /> */}
      {/* <Job salary={10000} position="Senior SDE" company="Amazon"  /> 
      <Job salary={13000} position="Junior SDE" company="Google" />
      <Job salary={9000} position="Project Manager" company="Netflix" />
       */}
       
       {/* Conditional Reasoning {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
       <h1 style={{ color : isGreen ? "green" : "red" }}>This Has Color</h1> */}


    </div>
  );
}



// const User = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// };

// const Job = (props) => {
//   return (
//     <div>
//       <h4>{props.salary}</h4>
//       <h4>{props.position}</h4>
//       <h4>{props.company}</h4>
//     </div>
//   );
// };


export default App;

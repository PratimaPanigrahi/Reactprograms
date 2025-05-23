// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';

// function App() {
//     return (
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     );
// }

// export default App;


// const name = 'Jonny';
// const greeting = <h1>Hello World</h1>;

// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car() {
//   return <h2>I am a Car!</h2>;
// }

// function Garage() {
//   return (
//     <>
// 	    <h1>Who lives in my Garage?</h1>
// 	    <Car />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);
// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// class Vehicle extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<Vehicle/>);
// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props) {
//   return <h2>I am a { props.brand }!</h2>;
// }

// const myElement = <Car brand="Ford" />;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
// export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Football() {
//   const shoot = () => {
//     alert("Great Shot!");
//   }
//   return (
//     <button onClick={shoot}>Take the shot!</button>   
//   );
// }

// function Ball(){
// let pop = () =>{
//     alert("alert box popped");
//   }

//   return(
//      <button onClick={pop}>Page alert</button>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Football/>);

// root.render(<Ball/>);
//  export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   return (
//     <form>
//       <label>Enter your name:
//         <input type="text" />
//       </label>
//     </form>
//   )
// }

// function SecondForm() {
//   return (
//     <form>
//       <label>Enter your Address:
//         <input type="text" />
//       </label>
//     </form>
//   )
// }

// function ThirdForm() {
//   return (
//     <form>
//       <label>Enter your PhoneNumber:
//         <input type="Number" />
//       </label>
//     </form>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// <div>
// root.render(<MyForm />);
// root.render(<SecondForm />);
// root.render(<ThirdForm />);
// </div>
// export default App;

// import React, { useState } from 'react';

// function App() {
//   const [msg, setMsg] = useState("");

//   return (
//     <div>
//       <button onClick={() => setMsg("Button 1 Clicked")}>Button 1</button>
//       <button onClick={() => setMsg("Button 2 Clicked")}>Button 2</button>
//       <p>{msg}</p>
//     </div>
//   );
// }
// const App = () => (
//   <div>
//     <h1>Welcome</h1>
//     <p>This is a paragraph inside a div.</p>
//     <h2>This is second head tag</h2>
//     <h3>This is third head tag</h3>

//   </div>
// );

// const name = "John";
// const greeting = <h1>Hello, {name}!</h1>;
// const price = 100;
// const tax = 0.18;
// const total = <p>Total: {price + price * tax}</p>;


// const headingStyle = { color: "blue", fontSize: "24px" };

// const App = () => <h1 style={headingStyle}>Styled Heading</h1>;

// function WelcomeMessage() {
//   return <h1 className="welcome-text">Welcome to React!</h1>;
// }

// export default App;

// import React from 'react';

// class Clock extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          date: new Date()
//       }      
//       setInterval( () => this.setTime(), 1000);
//    }
//    setTime() {
//       console.log(this.state.date);
//       this.setState((state, props) => (
//          {
//             date: new Date()
//          }
//       ))
//    }
//    render() {
//       return (
//          <div>
//             <p>The current time is {this.state.date.toString()}</p>
//          </div>
//       );
//    }
// }
// export default Clock;

// import React from 'react';
// class App extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         this.state = { name : "John Doe" };
//     }
// }
// export default App;

// import React from 'react';
// class App extends React.Component{
//    constructor(props){}
//     render(){
//         return(
//             <>
//                 <h1>Hello Welcome in JSX class based Component</h1>
//             </>
//         );
//     }
// }
// export default App;
// import React from "react";
// class App extends React.Component{
    // state = {name: "Musharraf", id: 101, skills: ["JS", "React"], percentage: 69};//1. state property
    
    // state = 100;// Warning: App.state: must be set to an object or null.   
    // state = null
//     constructor(){
//         super();
//         console.log(this);
//         this.state =  {
//             name: "Ahmad",
//             id: 1,
//             skills: ["JS", "React"],
//             percentage: 69
//         };
//     }
//     render(){
//         return(
//             <>
//                 {/* <h1>Hello This is Mohammad Parvez Musharraf </h1> */}
//                 <h2>Name: {this.state.name}</h2>
//                 <h2>Id: {this.state.id}</h2>
//                 <h3>percentage: {this.state.percentage}</h3>
//             </>
//         );
//     }
// }
// export default App;
// import React from "react";
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }

//     increment = ()=> this.setState({count: this.state.count+1});
//     decrement = ()=> this.setState({count: this.state.count-1});
//     reset = ()=> this.setState({count: 0});
//     multiply = ()=> this.setState({count: this.state.count*2});

//     render(){
//         return(
//         <div id="container">
//             <h1 style={{textAlign:"center"}}>{this.state.count}</h1>
//             <section>
//                 <button onClick={this.increment}>Increment</button>
//                 <button onClick={this.decrement}>Decrement</button>
//                 <button onClick={this.reset}>Reset</button>
//                 <button onClick={this.multiply}>Multiply</button>
//             </section>
//         </div>
//         )
//     }
// }
// export default App;

// import React, {useState} from "react";

// export default function App(){
//     let [count, setCount] = useState(0);
//     let handleClick  = (e)=>{
//         console.log(e);//syntheticBaseEvent
//         // setCount(count+1);
//          setCount(count+1);  
//         setCount((p)=> p+1);
      
      
      
//     };
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleClick }>Increase</button>
//             <button onClick={()=>setCount(count-1) }>Decrease</button>
//                   <button onClick={()=>setCount(0) }>reset</button>
//                         <button onClick={()=>setCount(count*2) }>Multiply</button>
//         </div>
//     );
// }

// import React, { useState } from "react";
// import { faker } from "@faker-js/faker";

// export default function App() {
//     let [image, setImage] = useState(faker.image.urlPicsumPhotos());
//     let [text, setText] = useState("Text");
//     let [count, setTime]= useState(100)
//     let handleClick = () => {
//         setImage(faker.image.urlPicsumPhotos());
//         setText(faker.person.firstName());
//         setTime();
//     };
    
//     return (
//         <>
//             <img src={image} alt="img-1" />
//             <h1>{text}</h1>
//             <button onClick={handleClick}>Change</button>
//         </>
//     );
// }

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);

// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./todo";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// import React, { Component } from "react";
// import Child from "./Child";

// class App extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello you are learning Props...</h1>
//                 <Child name="Honey" id={101} skills={["JS", "React", "Java", "SQL"]}/>
//                 <Child name="Moon" id={102} skills={["JS", "React", "Express", "Node"]}/>
//             </div>
//         )
//     }
// }
// export default App;

// //  Type 1
// import React from "react";
// function Parent(props){
//     console.log(props);
//         return(
//             <div>
//                 <h1>name: {props.name}</h1>
//                 <h2>id: {props.id}</h2>
//                 <h3>percentage: {props.percentage}</h3>
//                 <h3>skills:</h3>
                
//                 <h2>
//                     <ul>
//                         {(props.skills || []).map((v,i)=>{
//                             <li key={i+1}>{v}</li>
//                         })}
//                     </ul>
//                 </h2>               
//             </div>
//         )
// }
// export default Parent;

// Type 2
// import React from "react";
// function Child(props){
//     console.log(props);
//     return(
//         <div>
//             <h1>name: {props.name}</h1>
//             <h2>id: {props.id}</h2>
//             <h2>
//                 <ul>
//                     {(props.skills || []).map((v,i) => (
//                         <li key={i+1}>{v}</li>
//                     ))}
//                 </ul>
//             </h2>               
//         </div>
//     )
// }

// function App() {
//     return (
//         <div>
//             <Child name="John" id={1} skills={["React", "JS", "CSS"]} />
//             <Child name="Jane" id={2} skills={["Node", "Express"]} />
//             {/* This will not error, but show empty list */}
//             <Child name="NoSkills" id={3} />
//         </div>
//     );
// }

// export default Child;


// import React from "react";
// import Child from "./test";

// function App() {
//   return (
//     <Child>
//       <h1>Hello from Parent!</h1>
//       <p>This is a child element passed from App to Child.</p>
//     </Child>
//   );
// }

// export default App;
// function Child(props){
//     return(
//         <div>
//             <h1>name: {props.name}</h1>
//             <h2>id: {props.id}</h2>
//             <h2>
//                 <ul>
//                     {(props.skills || []).map((v, i) => (
//                         <li key={i+1}>{v}</li>
//                     ))}
//                 </ul>
//             </h2>               
//         </div>
//     )
// }

// // Set default props
// Child.defaultProps = {
//     name: "",
//     id: [],
//         skills: []
// };

// export default Child;

//Switch Operator
// import React from "react";

// function Operator({ num1 = 5, num2 = 9, op = "*" }) {
//   let result;
//   switch (op) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num2 !== 0 ? num1 / num2 : "Infinity";
//       break;
//     default:
//       result = "Invalid operator";
//   }

//   return (
//     <div>
//       <h2>
//         {num1} {op} {num2} = {result}
//       </h2>
//     </div>
//   );
// }

// export default Operator;


// operators
// import React from "react";

// const NavbarForChild4 = ({logIn}) => {
//     let IsAuth = () => {
//         return (
//             <>
//                 <li>sachin</li>
//                 <li>LogOut</li>
//             </>
//         )
//     }
//     let IsGuest = () => {
//         return(
//             <>
//                 <li>LogIn</li>
//                 <li>SignUp</li>
//             </>
//         )
//     };
//     return(
//         <div>
//             <ul>
//                 <li>Home</li>
//                 <li>Constact Us</li>
//                 <li>Blogs</li>
//                 {logIn?<IsAuth/>:<IsGuest/>}
//             </ul>
//         </div>
//     );
// };

// export default NavbarForChild4;

//If else
// import React from "react";  

// const NavbarForChild4 = ({logIn}) => {
//     if(logIn)
//         return(
//             <div>
//                 <ul>
//                     <li>Home</li>
//                     <li>Constact Us</li>
//                     <li>Blogs</li>
//                     <li>Sachin</li>
//                     <li>LogOut</li>
//                 </ul>
//             </div>
//         )
//     else 
//         return(
//             <div>
//                 <ul>
//                     <li>About us</li>
//                     <li>Web page</li>
//                     <li>Programs</li>
//                     <li>Guest</li>
//                     <li>Laguages</li>
//                 </ul>
//             </div>
//         )
// }
// export default NavbarForChild4;

// import React from "react";

//Mounting code
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { message: "Hello, World!" };
//         console.log("PRatima");
//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log("Infobyte");
//         return null; // No state update
//     }

//     componentDidMount() {
//         console.log("Python");
//         // You can perform API calls or subscriptions here
//     }

//     render() {
//         console.log("REact");
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <p>Check the console for mounting phase logs.</p>
//             </div>
//         );
//     }
// }

// export default App;

//API code
// import React, { useState, useEffect } from "react";

// export default function App() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         // This code runs once after the component mounts
//         fetch("https://jsonplaceholder.typicode.com/todos/1")
//             .then((response) => response.json())
//             .then((json) => setData(json));
//     }, []); // Empty dependency array = run once on mount

//     return (
//         <div>
//             <h1>API</h1>
//             {data ? (
//                 <pre>{JSON.stringify(data,0, 2)}</pre>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

//Constructor code
// import React from "react";

// class App extends React.Component {
//     constructor(props) {
//         super(props); // Always call super(props) first!
//         this.state = {
//             message: "Hello from constructor!"
//         };
//         console.log("Constructor called");
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.message}</h1>
//                 <p>Check the console to see when the constructor runs.</p>
//             </div>
//         );
//     }
// }

// export default App;


//Get functions code
// import React from "react";

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             message: "Hello from constructor!",
//             data:" This is infobyte",
//             name: "Python",
//             id: 101,
//             skills: ["JS", "React", "Java", "SQL"],
//             percentage: 69
//         };
//         this.state1={
//             name: "Ahmad",
//             id: 1,
//             skills: ["JS", "React"],
//             percentage: 69
//         }
//         console.log("Constructor called");
//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log("getDerivedStateFromProps called");
//         // Return null if no state update is needed
//         return null;
//     }

//     render() {
//         return (
//             <div id="container">
//                 <h1>{this.state.message}</h1>
//                 <h1>{this.state.data}</h1>
//                 <h1>{this.state.name}</h1>
//                 <h1>{this.state.id}</h1>
//                 <h1>{this.state.skills}</h1>
//                 <h1>{this.state.percentage}</h1>

//                 <h1>{this.state1.name}</h1>
//                 <h1>{this.state1.id}</h1>
//                 <h1>{this.state1.skills}</h1>
//                 <h1>{this.state1.percentage}</h1>
//                 <p>Check the console to see when the constructor and getDerivedStateFromProps run.</p>
//             </div>
//         );
//     }
// }

// export default App;


//Mouting data code
// import React from "react";

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             message: "Hello from constructor!"
//         };
//         console.log("Constructor called");
//     }

//     componentDidMount() {
//         // Here we can make the https requests.
//         // Here DOM manipulation can be performed.
//         console.log("componentDidMount called");
//         // Example: Simulate fetching data
//         setTimeout(() => {
//             this.setState({ message: "Data loaded after mount!" });
//         }, 1000);
//     }

//     render() {
//         return (
//             <div id="container">
//                 <h1>{this.state.message}</h1>
//                 <p>Check the console to see when the constructor and componentDidMount run.</p>
//             </div>
//         );
//     }
// }

// export default App;


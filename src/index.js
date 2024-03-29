import React , {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import styles from './demo.module.css'
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, NavLink, Switch, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Notfound from './Notfound';
// import Infofromapp from './App.js';

// const myelement = React.createElement('h1',{},"Hi , React app");
// ReactDOM.render(myelement,document.getElementById('root'));

// class ParentProps extends React.Component{
//     render(){
//       return <div>
//                 <h1>learn {this.props.concept} in {this.props.language}</h1>
//             </div>

//     }
// }

// class ChildProps extends React.Component{
//   render(){

//       const course ={concept:"props",language:"English"};
//       return <ParentProps var={course} />


//   }
// }
// ParentProps.defaultProps ={concept:"props",language:"English"}
// ReactDOM.render(<ParentProps concept="component" />, document.getElementById('root'));

// class Reactstate extends React.Component{
//   constructor(){
//     super();
//     this.state = {initialValue:"welcome", secondValue:"Guys !"}
//   }
// onChange=()=>{
//   this.setState({initialValue:"Thanks for watching"});
// }
//   render(){
//     return <div>
//       <h1>{this.state.initialValue} {this.state.secondValue}</h1>
//       <button type='button' onClick={this.onChange}>Exit</button>
//     </div> 
//   }
// }

// ReactDOM.render(<Reactstate />, document.getElementById('root'));

// var Mylist = (props)=>{
//   const listVal = props.initialListVal;
//   const newList = listVal.map(data=>{
//     return <li>{data*2}</li>
//   });
//   return <ul>{newList}</ul>
// }

// const mylistValue = [1,2,3,4,5]
// ReactDOM.render(<Mylist initialListVal={mylistValue}/>, document.getElementById('root'));


// var MylistKeys = (props)=>{
//   const listVal = props.initialListVal;
//   const newList = listVal.map((data)=>
//     <div keys={data.id}>
//         <h1>key : {data.id} Courses:{data.courses} language:{data.language}</h1>
//     </div>

//   );
//   return (<div>{newList}</div>);
// }

// const mylistValue = [{id:"1",courses:"React",language:"tamil"},
//                       {id:"2",courses:"Angular", language:"english"}]
// ReactDOM.render(<MylistKeys initialListVal={mylistValue}/>, document.getElementById('root'));

// var ListData = (props) => {
//   return <h4>key:{props.keys}, Value: {props.item}</h4>

// }
// var MylistKeys = (props) => {
//   const mappedList = props.initialListVal.map((data, index) =>
//     <ListData keys={index+1} item={data} />
//   );
//   return (
//     <div>
//       {mappedList}
//     </div>
//   )
// }

// const mylistValue = [1000, 2000, 3000, 4000, 5000]
// ReactDOM.render(<MylistKeys initialListVal={mylistValue} />, document.getElementById('root'));

// component Mount phase

// class Mountphase extends React.Component {
//   constructor() {
//     super();
//     this.state = { value: "welcome", name: "Guys !" }
//   }
//   componentWillMount() {
//     alert('React JS tutorial');
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ value: "Thank you" })
//     }, 5000)
//   }
//   changeValue = ()=>{
//     this.setState({value:"Learn react"})
//   }
//   deleteHeader=()=>{
//     this.setState({value:false, name:false})
//   }
//   componentWillUpdate(){
//     alert("Do you want update a new value ?")
//   }

//   componentDidUpdate(){
//     document.getElementById("myDiv").innerHTML = "New updated successfully with "+this.state.value;
//   }
//   shouldComponentUpdate(){
//     return true;
//   }
//   componentWillUnmount(){
//     alert('Headre deleted !')
//   }
//   render() {
//     return <div>
//       <h1>{this.state.value} {this.state.name}</h1>
//       <br />
//       <button type='button' onClick={this.changeValue}>changeValue</button>
//       <button type='button' onClick={this.deleteHeader}>Delete header</button>
//     </div>
//   }
// }

// ReactDOM.render(<Mountphase />, document.getElementById("root"));


// Event handling

// class Eventbind extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       msg: "Welcome"
//     }
//   }
//   clickEvent = () => {
//     this.setState({
//       msg:"Thank you"
//     })
//   }
//   render() {
//     return (<div>
//       <h1>{this.state.msg}</h1>
//       <button onClick={this.clickEvent}>Click</button>
//     </div>)
//   }
// }
// ReactDOM.render(<Eventbind />, document.getElementById("root"))/

// Argument pass in event handler with anonymous function
// class Eventbind extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       msg: "Welcome"
//     }
//   }
//   clickEvent = (a) => {
//     this.setState({
//       msg:a
//     })
//   }
//   render() {
//     return (<div>
//       <h1>{this.state.msg}</h1>
//       <button onClick={()=>this.clickEvent("Thank You !")}>Click</button>
//     </div>)
//   }
// }
// ReactDOM.render(<Eventbind />, document.getElementById("root"))

// with bind key word
// class Eventbind extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       msg: "Welcome"
//     }
//   }
//   clickEvent = (a) => {
//     this.setState({
//       msg:a
//     })
//   }
//   render() {
//     return (<div>
//       <h1>{this.state.msg}</h1>
//       <button onClick={this.clickEvent.bind(this,"Thank You !")}>Click</button>
//     </div>)
//   }
// }
// ReactDOM.render(<Eventbind />, document.getElementById("root"))


// styles
// class Eventbind extends React.Component {
//    render() {
//     const myStyle = {
//       color:"Green",
//       fontFamily:"Arial",
//       textAlign:"center"
//     }
//     return (<div>
//       <h1 style={{color:"red", textAlign:"center",textTransform:"capitalize"}}>header</h1>
//       <h1 style={myStyle}>Welcome</h1>
//       <h1 className='App-header'>Content</h1>
//       <h1 className={styles.heading}>Thank You !</h1>
      
//     </div>)
//   }
// }
// ReactDOM.render(<Eventbind />, document.getElementById("root"))
  

// React redux

//React forms

// class Eventbind extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: "",
//       age: "",
//       errorMsg: ""
//     }
//   }
//   userValue = (event) => {
//     let n = event.target.name;
//     let v = event.target.value;
//     let err = "";
//     if (n === "age") {
//       if (v !== "" && !Number(v)) {
//         err = <strong>Invalid value, your age must be a number</strong>
//       }
//     }
//     // this.setState({userName:event.target.value});/
//     this.setState({ errorMsg: err })
//     this.setState({ [n]: v })
//   }
//   formSubmit = (event) => {
//     event.preventDefault();
//     alert("your name " + this.state.userName);
//   }
//   render() {
//     return (<div>
//       <h1>Hello {this.state.userName}</h1>
//       <form onSubmit={this.formSubmit}>
//         <h2>Your Age : {this.state.age}</h2>
//         Enter your name : <input type='text' name="userName" onChange={this.userValue} />
//         <br />
//         <br />
//         Enter your Age : <input type='text' name="age" onChange={this.userValue} /> {this.state.errorMsg}
//         <br />
//         <br />
//         <input type='submit' />
//       </form>
//     </div>)
//   }
// }
// ReactDOM.render(<Eventbind />, document.getElementById("root"))

// React hooks

// function Reacthooks(){
//   const [count, updatecount] = useState(0);
//     return(
//       <div>
//         <p>You clicked the above button {count} times </p>
//         <button type='button' onClick={()=>updatecount(count + 1)}>Click me !</button>
//       </div>
//     )
// }
// ReactDOM.render(<Reacthooks />, document.getElementById('root'));

// function Reacthooks(){
//   const [count, updatecount] = useState(0);
//   useEffect(()=>{
//     alert("You clicked " + count + " times");
//   })
//     return(
//       <div>
//         <p>You clicked the above button {count} times </p>
//         <button type='button' onClick={()=>updatecount(count + 1)}>Click me !</button>
//       </div>
//     )
// }

// ReactDOM.render(<Reacthooks />, document.getElementById('root'));

const routing = (
  <Router>
    <div>
      <h1>React Routers</h1>
      <ul>
        <li><NavLink to="/" exact style={({ isActive }) => ({
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '#f0f0f0',
        })}>Home</NavLink></li>
        <li><NavLink to="/About" exact style={({ isActive }) => ({
          color: isActive ? '#fff' : '#545e6f',
          background: isActive ? '#7600dc' : '#f0f0f0',
        })}>About us</NavLink></li>
      </ul>
      <switch>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="*" Component={Notfound} />
        </Routes>
      </switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'));

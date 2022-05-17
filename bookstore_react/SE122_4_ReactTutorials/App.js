import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

// -----------2 Hello, Harper Perez!--------------
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }
//
// const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
// };
//
// const element = (
//     <h1>
//         Hello, {formatName(user)}!
//     </h1>
// );

// -----------4 Composing Components--------------
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }


function App() {

    // -----------3 Hello World! Time--------------
    // const element = (
    //     <div>
    //         <h1>Hello, world!</h1>
    //         <h2>It is {new Date().toLocaleTimeString()}.</h2>
    //     </div>
    // );
    // ReactDOM.render(element, document.getElementById('root'));

    return (
        // -----------0 Default Code---------------
        // <div className="App">
        //   <header className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <p>
        //       Edit <code>src/App.js</code> and save to reload.
        //     </p>
        //     <a
        //       className="App-link"
        //       href="https://reactjs.org"
        //       target="_blank"
        //       rel="noopener noreferrer"
        //     >
        //       Learn React
        //     </a>
        //   </header>
        // </div>

        // -----------1 Hello World---------------
        <h1> Hello World! </h1>

        // -----------2 Hello, Harper Perez!--------------
        // -----------3 Hello World! Time--------------
        // element

        // -----------4 Composing Components--------------
        // <div>
        //     <Welcome name="Sara"/>
        //     <Welcome name="Cahal"/>
        //     <Welcome name="Edite"/>
        // </div>
    );
}

// -----------3 Hello World! Time--------------
// setInterval(App, 1000);


export default App;

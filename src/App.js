import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyBox(props) {
  return (
    <div className="mySuperBox">

      <p> {props.title} </p>

    </div>
  );
}

function App() {

  let array = ["yo", "yo1", "yo3"];

  return (
    <div>

        {
          array.map(element => <MyBox title={element} />)
        }


    </div>
  );
}

export default App;

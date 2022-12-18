import './App.css';
import React from 'react';

/*function HelloWorld(props) {
  return <h1>Olá, o planeta da vez é {props.nomePlaneta}.</h1>
}*/

const HelloWorld = (props) => {
  return <h1>Olá, o planeta da vez é {props.nomePlaneta}.</h1>
}

function App() {
  return (
    <div>
      <HelloWorld nomePlaneta="Terra" />
      <HelloWorld nomePlaneta="Marte" />
      <HelloWorld nomePlaneta="Saturno" />
    </div>
  );
}

export default App;

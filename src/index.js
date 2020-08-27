//Esto no es REACT!
// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';
// const container = document.getElementById('app');
// container.appendChild(element);

//Esto es React
import React from "react";
//ReactDOM es el equivalente a appenChild
import ReactDOM from "react-dom";
import BadgesNew from "./pages/BadgesNew";
import "bootstrap/dist/css/bootstrap.css";
//const element = <h1>Hello, Platzi Badges!</h1>;
//const element = React.createElement("h1", {}, "Hola soy un childre");
const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<BadgesNew />, container);

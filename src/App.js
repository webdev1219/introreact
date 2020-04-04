import React, { Component } from "react";
import nombre, { lastName, age } from "./helpers";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SayHello from "./components/SayHello";
// import logo from "./logo.svg";
// import "./App.css";

function calcularSuma(num1, num2) {
  return num1 + num2;
}

class App extends Component {
  renderDiv() {
    return <div>dentro de variable div</div>;
  }

  calcularSuma(num1, num2) {
    return num1 + num2;
  }

  render() {
    const result = this.calcularSuma(2, 4);

    return (
      <div>
        <div className={"fasdfasd"}>dsaf</div>
        <ul>
          <li>dfsa</li>
          <li>fas</li>
          <li>asd</li>
        </ul>
        <Header title="titulo" age={12} show />
        <SayHello
          name={"Edu"}
          lastName={lastName}
          obj={{
            prop1: "string",
            prop2: 23,
          }}
        />
        <SayHello name={"Michael"} lastName="das" />
        <SayHello name={"Marta"} lastName="asd" />
        <Nav />
        <div>
          mi nombre es: {nombre} {lastName}
          {age}
        </div>
        <div>mi suma es: {result}</div>
        <div>Hello Mi primer componente</div>
      </div>
    );
  }
}

export default App;

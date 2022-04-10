import React from "react";
import Calculator from "./main/Calculator";
import "./Container.css";

export default function App() {
    return (
        <div className="container">
            <h1>React Challenge: Calculator</h1>
            <h3>Nunca confie em uma calculadora feita em JavaScript, eles disseram.</h3>
            <Calculator />
        </div>
    );
}

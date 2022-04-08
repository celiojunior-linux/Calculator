import React from "react";
import "./Button.css";

export default function Button({ char, className, onClick }) {
    return (
        <button
            className={`button ${className ? className : ""}`}
            onClick={onClick}
        >
            {char}
        </button>
    );
}

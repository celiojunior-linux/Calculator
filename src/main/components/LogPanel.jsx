import React from "react";
import "./LogPanel.css";

export default function LogPanel({ typed, operation, result }) {
    const getOperation = () => {
        return operation ? operation : <>&nbsp;</>;
    };
    
    const getTyped = () => {
        return typed !== null ? typed : <>&nbsp;</>
    }

    return (
        <div className="logPanel">
            <div>{getOperation()} {getTyped()}</div>
            <div style={{fontSize:'1.5em'}}>{`${result.toString().includes(".")? result.toFixed(4) : result}`}</div>
        </div>
    );
}

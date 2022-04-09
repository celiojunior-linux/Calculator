import React, { Component } from "react";
import "./Calculator.css";
import Button from "./components/Button";
import LogPanel from "./components/LogPanel";

export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: null,
            insertionValue: null,
            cachedValue: 0,
            operation: null,
            clearInsertionValue: false,
        };
    }

    updateDisplayValue(displayValue) {
        this.setState({ ...this.state, displayValue: displayValue });
    }

    updateOperation(operation) {
        let cachedValue = this.state.cachedValue;
        if (operation == this.state.operation) {
            cachedValue = this.getUpdatedCachedValue(
                this.state.insertionValue,
                operation
            );
        }
        this.setState({
            ...this.state,
            operation: operation,
            cachedValue: cachedValue,
            clearInsertionValue: true,
            displayValue: this.state.insertionValue,
        });
    }

    getUpdatedCachedValue(insertionValue, operation) {
        let cachedValue = this.state.cachedValue;
        switch (operation) {
            case "+":
                cachedValue += parseFloat(insertionValue);
                break;
            case "-":
                cachedValue -= parseFloat(insertionValue);
                break;
            case "x":
                cachedValue *= parseFloat(insertionValue);
                break;
            case "/":
                cachedValue /= parseFloat(insertionValue);
                break;
        }
        return cachedValue;
    }

    insertionValue(value) {
        value =
            (this.state.insertionValue !== null &&
            !this.state.clearInsertionValue
                ? this.state.insertionValue
                : "") + value;
        if (isNaN(value)) return;

        let cachedValue = this.state.cachedValue;
        if (this.state.operation == null) {
            cachedValue = parseFloat(value);
        }
        this.setState({
            ...this.state,
            insertionValue: value,
            displayValue: value,
            clearInsertionValue: false,
            cachedValue: cachedValue,
        });
    }

    updateResult() {
        this.setState({
            clearInsertionValue: true,
            displayValue: null,
            operation: null,
            cachedValue: this.getUpdatedCachedValue(
                this.state.insertionValue,
                this.state.operation
            ),
        });
    }

    resetData() {
        this.setState({
            displayValue: null,
            insertionValue: null,
            cachedValue: 0,
            operation: null,
            clearInsertionValue: false,
        });
    }

    handleUpdateOperationEvent(event) {
        this.updateOperation(event.target.innerText);
    }

    render() {
        return (
            <div className="calculator">
                <LogPanel
                    typed={this.state.displayValue}
                    operation={this.state.operation}
                    result={this.state.cachedValue}
                />
                <div className="buttonPanel">
                    <Button
                        char="AC"
                        className="acButton"
                        onClick={() => this.resetData()}
                    />
                    <Button
                        char="/"
                        className="yellowButton"
                        onClick={(event) =>
                            this.handleUpdateOperationEvent(event)
                        }
                    />
                    <Button
                        char="7"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="8"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="9"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="x"
                        className="yellowButton"
                        onClick={(event) =>
                            this.handleUpdateOperationEvent(event)
                        }
                    />
                    <Button
                        char="4"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="5"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="6"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="-"
                        className="yellowButton"
                        onClick={(event) =>
                            this.handleUpdateOperationEvent(event)
                        }
                    />
                    <Button
                        char="1"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="2"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="3"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="+"
                        className="yellowButton"
                        onClick={(event) =>
                            this.handleUpdateOperationEvent(event)
                        }
                    />
                    <Button
                        char="0"
                        className="zero"
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="."
                        onClick={(event) =>
                            this.insertionValue(event.target.innerText)
                        }
                    />
                    <Button
                        char="="
                        className="yellowButton"
                        onClick={() => this.updateResult()}
                    />
                </div>
            </div>
        );
    }
}

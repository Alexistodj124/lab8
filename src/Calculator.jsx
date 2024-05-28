import React, { useState } from "react";

function Calculator(){

    const [displayValue, setDisplayValue] = useState("0");
    const [firstOperand, setFirstOperand] = useState(null);
    const [secondOperand, setSecondOperand] = useState(null);
    const [operator, setOperator] = useState(null);
    const length = displayValue.length

    const handleNumberClick = (num) => {
        console.log(length)
        if (length < 9 ){
            if (operator === null) {
                setFirstOperand(firstOperand === null ? num : firstOperand + num);
                setDisplayValue(firstOperand === null ? num : firstOperand + num);
            } else {
                setSecondOperand(secondOperand === null ? num : secondOperand + num);
                setDisplayValue(secondOperand === null ? num : secondOperand + num);
            }
        }
        
    };

    const handleOperatorClick = (op) => {
        if (firstOperand !== null && secondOperand === null) {
            setOperator(op);
        } else if (firstOperand !== null && secondOperand !== null) {

            const result = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
            if (result < 0 || result > 999999999){
                setDisplayValue('ERROR ');
            }else{
                console.log(result)
                setDisplayValue(result.toString());
                setFirstOperand(result.toString());
                setSecondOperand(null);
                setOperator(null);
            }
            
        }
    };

    const calculate = (val1, val2, op) => {
        switch (op) {
            case '+':
                return val1 + val2;
            case '-':
                return val1 - val2;
            case '*':
                return val1 * val2;
            case '/':
                return val1 / val2;
            default:
                return val2;
        }
    };

    const handleEqualClick = () => {
        if (operator !== null) {
            const result = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
            if (result < 0 || result > 999999999){
                setDisplayValue('ERROR ');
            }else {
                setDisplayValue(result.toString());
                setFirstOperand(result.toString());
                setSecondOperand(null);
                setOperator(null);
            }
            
        }
    };

    const clearDisplay = () => {
        setDisplayValue('0');
        setFirstOperand(null);
        setSecondOperand(null);
        setOperator(null);
    };
    return(
                <div className="calculator-container">
                    <div className="display" id="display" data-testid="display">{displayValue}</div>
                    <div className="calculator-grid">
                        <button className="grid-item" onClick={() => handleNumberClick("1")}>1</button>
                        <button className="grid-item" onClick={() => handleNumberClick("2")}>2</button>
                        <button className="grid-item" onClick={() => handleNumberClick("3")}>3</button>
                        <button className="grid-item" onClick={() => handleOperatorClick('+')}>+</button>
                        <button className="grid-item" onClick={() => handleNumberClick("4")}>4</button>
                        <button className="grid-item" onClick={() => handleNumberClick("5")}>5</button>
                        <button className="grid-item" onClick={() => handleNumberClick("6")}>6</button>
                        <button className="grid-item" onClick={() => handleOperatorClick('-')}>-</button>
                        <button className="grid-item" onClick={() => handleNumberClick("7")}>7</button>
                        <button className="grid-item" onClick={() => handleNumberClick("8")}>8</button>
                        <button className="grid-item" onClick={() => handleNumberClick("9")}>9</button>
                        <button className="grid-item" onClick={() => handleOperatorClick('*')}>*</button>
                        <button className="grid-item" onClick={() => handleNumberClick("0")}>0</button>
                        <button className="grid-item" onClick={clearDisplay}>C</button>
                        <button className="grid-item" onClick={() => handleEqualClick()}>=</button>
                        <button className="grid-item" onClick={() => handleOperatorClick('/')}>/</button>
                    </div>
                    <p>Display: {displayValue}</p>
                </div>
        
    )
}

export default Calculator

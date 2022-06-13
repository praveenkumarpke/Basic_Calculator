import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';
import '../page/calc.scss';

function Calc() {
    const [prestate, setPrestate] = useState('');
    const [curstate, setCurstate] = useState('');
    const [input, setInput] = useState('0');
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const inputNum = (e) => {
        // console.log("prestate : " + prestate);
        // console.log("curstate : " + curstate);
        if (curstate.includes(".") && e.target.innerText === ".") return;

        if (total) {
            setPrestate("");
        }

        curstate ? setCurstate((pre) => pre + e.target.innerText) : setCurstate(e.target.innerText);
        setTotal(false);
    };

    useEffect(() => {
        setInput(curstate);
    }, [curstate]);

    useEffect(() => {
        setInput("0");
    }, []);

    const operatorType = (e) => {
        setTotal(false)
        setOperator(e.target.innerText);
        if (curstate === "") return
        if (prestate !== "") {
            equal()
        } else {
            setPrestate(curstate)
            setCurstate("")
        }
    };

    const equal = (e) => {
        if (e?.target.innerText === "=") {
            setTotal(true)
            // console.log("curstate : "+curstate);
            setCurstate(curstate);
        };

        let val,output
        let cal
        switch (operator) {
            case "+":
                val = String(parseFloat(prestate) + parseFloat(curstate));
                // console.log("val : " + val);
                if (val % 1 === 0) {
                    cal = val;
                    // console.log("integer -> calc : " + cal);
                }
                else {
                    output = Number(val).toFixed(5);
                    cal = output;
                    // console.log("float -> calc : " + cal);
                }
                break;
            case "-":
                val = String(parseFloat(prestate) - parseFloat(curstate));
                // console.log("val : " + val);
                if (val % 1 === 0) {
                    cal = val;
                    // console.log("integer -> calc : " + cal);
                }
                else {
                    output = Number(val).toFixed(5);
                    cal = output;
                    // console.log("float -> calc : " + cal);
                }
                break;
            case "x":
                val = String(parseFloat(prestate) * parseFloat(curstate));
                // console.log("val : " + val);
                if (val % 1 === 0) {
                    cal = val;
                    // console.log("integer -> calc : " + cal);
                }
                else {
                    output = Number(val).toFixed(5);
                    cal = output;
                    // console.log("float -> calc : " + cal);
                }
                break;
            case "/":
                val = String(parseFloat(prestate) / parseFloat(curstate));
                // console.log("val : " + val);
                if (val % 1 === 0) {
                    cal = val;
                    // console.log("integer -> calc : " + cal);
                }
                else {
                    output = Number(val).toFixed(5);
                    cal = output;
                    // console.log("float -> calc : " + cal);
                }
                break;
            default:
                return;
        }
        // console.log("prestate : " + prestate + " || curstate : " + curstate + " || cal : " + cal);
        setInput("");
        setPrestate(cal);
        setCurstate("");
    }

    const percent = () => {
        // console.log("prestate : "+ prestate);
        // console.log("curstate : "+ curstate);
        prestate ? setCurstate(String((parseFloat(curstate) / 100) * prestate))
            : setCurstate(String(parseFloat(curstate) / 100));
    };

    const clear = () => {
        // console.log("prestate : "+prestate+" curstate : "+curstate+" Input : "+input);
        setPrestate("");
        setCurstate("");
        setInput("0");
    };

    const backspace = () => {
        setCurstate(curstate.slice(0, -1));
        setPrestate("0");
    }

    // bootstrap and userdefined styles

    const container = "w-100 h-auto d-flex align-item-center justify-content-center";
    const wrap = "shadow-lg p-3 bg-body rounded-3 center";
    const outline = "m-2 mt-3";
    const inputfeild = "w-100 p-4 border border-2 border-dark rounded-3 h1 i inputfeild height";
    const buttonbox = "mb-2 d-flex align-item-center justify-content-between";
    const buttons = "w-22 btn btn-outline-dark";
    const button = "w-48 btn btn-outline-dark";

    return (
        <div className={container}>
            <div className={wrap}>
                <div className={outline}>
                    <div className={inputfeild}>
                        {input !== "" || input === "0" ? (
                            <NumberFormat value={input} displayType={"text"} thousandSeparator={true} />
                        ) : (
                            <NumberFormat value={prestate} displayType={"text"} thousandSeparator={true} />
                        )
                        }
                    </div>
                </div>

                <div className={outline}>
                    <div className={buttonbox}>
                        <button type='button' className={buttons} id='clear' onClick={clear}>AC</button>
                        <button type='button' className={buttons} id='backspace' onClick={backspace}>C</button>
                        <button type='button' className={buttons} onClick={percent}>%</button>
                        <button type='button' className={buttons} onClick={operatorType}>/</button>
                    </div>
                    <div className={buttonbox}>
                        <button type='button' className={buttons} onClick={inputNum}>7</button>
                        <button type='button' className={buttons} onClick={inputNum}>8</button>
                        <button type='button' className={buttons} onClick={inputNum}>9</button>
                        <button type='button' className={buttons} onClick={operatorType}>x</button>
                    </div>
                    <div className={buttonbox}>
                        <button type='button' className={buttons} onClick={inputNum}>4</button>
                        <button type='button' className={buttons} onClick={inputNum}>5</button>
                        <button type='button' className={buttons} onClick={inputNum}>6</button>
                        <button type='button' className={buttons} onClick={operatorType}>-</button>
                    </div>
                    <div className={buttonbox}>
                        <button type='button' className={buttons} onClick={inputNum}>1</button>
                        <button type='button' className={buttons} onClick={inputNum}>2</button>
                        <button type='button' className={buttons} onClick={inputNum}>3</button>
                        <button type='button' className={buttons} onClick={operatorType}>+</button>
                    </div>
                    <div className={buttonbox}>
                        <button type='button' className={buttons} onClick={inputNum}>0</button>
                        <button type='button' className={buttons} onClick={inputNum}>.</button>
                        <button type='button' className={button} id='equal' onClick={equal}>=</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calc
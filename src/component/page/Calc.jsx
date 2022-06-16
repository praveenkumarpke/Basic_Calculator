import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NumberFormat from 'react-number-format';
import '../page/calc.scss';
import { Container } from 'react-bootstrap';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        // console.log("operator :" + operator);
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

        Number.prototype.countDecimals = function () {
            if (Math.floor(this.valueOf()) === this.valueOf()) return 0;
            return this.toString().split(".")[1].length || 0;
        }

        let val, data, output, result
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
                    output = val;
                    const numStr = String(output)
                    // console.log("numStr : " + numStr);

                    if (numStr.includes('.')) {
                        const datas = numStr.split('.')[1].length;
                        // console.log("decimal digits -> datas : " + datas);
                        result = datas;
                        // console.log("result : "+result);
                        if (result <= 9) {
                            cal = numStr;
                        }
                        else {
                            // console.log("val : "+val);
                            cal = Number(val).toFixed(10);
                            // console.log("cal : "+cal);
                        }
                    };
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
                    output = val;
                    const numStr = String(output)
                    // console.log("numStr : " + numStr);

                    if (numStr.includes('.')) {
                        const datas = numStr.split('.')[1].length;
                        // console.log("decimal digits -> datas : " + datas);
                        result = datas;
                        // console.log("result : "+result);
                        if (result <= 9) {
                            cal = numStr;
                        }
                        else {
                            // console.log("val : "+val);
                            cal = Number(val).toFixed(10);
                            // console.log("cal : "+cal);
                        }
                    };
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
                    output = val;
                    const numStr = String(output)
                    // console.log("numStr : " + numStr);

                    if (numStr.includes('.')) {
                        const datas = numStr.split('.')[1].length;
                        // console.log("decimal digits -> datas : " + datas);
                        result = datas;
                        // console.log("result : "+result);
                        if (result <= 9) {
                            cal = numStr;
                        }
                        else {
                            // console.log("val : "+val);
                            cal = Number(val).toFixed(10);
                            // console.log("cal : "+cal);
                        }
                    };
                }
                break;
            case "/":
                val = String(parseFloat(prestate) / parseFloat(curstate));
                // console.log("val : " + val);
                if (val % 1 === 0) {
                    cal = val;
                }
                else {
                    output = val;
                    const numStr = String(output)
                    // console.log("numStr : " + numStr);

                    if (numStr.includes('.')) {
                        data = numStr.split('.')[1].length;
                        // console.log("decimal digits -> data : " + data);
                        result = data;
                        if (result <= 9) {
                            cal = numStr;  
                        }
                        else {
                            cal = Number(val).toFixed(10);
                        }
                    };
                }
                break;
            default:
                return;
        }
        // console.log("prestate : " + prestate + " || curstate : " + curstate + " || cal : " + cal);
        setInput("");
        setPrestate(cal);
        setCurstate("");
        setOperator("");
    }

    const percent = () => {
        // console.log("prestate : "+ prestate);
        // console.log("curstate : "+ curstate);
        prestate ? setCurstate(String((parseFloat(curstate) / 100) * prestate) * 100)
            : setCurstate(String(parseFloat(curstate) / 100));
    };

    const clear = () => {
        // console.log("prestate : "+prestate+" curstate : "+curstate+" Input : "+input);
        setPrestate("");
        setCurstate("");
        setInput("0");
        setOperator("");
    };

    const backspace = () => {
        setCurstate(curstate.slice(0, -1));
        setPrestate("0");
        setOperator("");
    }

    // bootstrap and userdefined styles

    const container = "w-100 h-auto d-flex align-item-center justify-content-center";
    const wrap = "shadow-lg p-3 bg-body rounded-3 center";
    const outline = "m-2 mt-3";
    const inputfeild = "w-100 p-4 border border-2 border-dark rounded-3 h1 i inputfeild height position-relative"; // position
    const buttonbox = "mb-2 d-flex align-item-center justify-content-between";
    const buttons = "w-22 btn btn-outline-dark";
    const button = "w-48 btn btn-outline-dark";

    return (
        <Container>
            <div className={container}>
                <div className={wrap}>
                    <h1>Calculator</h1>
                    <a href="https://github.com/praveenkumarpke/Basic_Calculator" target="_blank"> <GitHubIcon /> </a>
                    <div className={outline}>
                        <div className={inputfeild}>
                            <div className='position-absolute fontSize'>
                                {operator}
                            </div>
                            <div className=''>
                                {input !== "" || input === "0" ? (
                                    <NumberFormat value={input} displayType={"text"} thousandSeparator={true} />
                                ) : (
                                    <NumberFormat value={prestate} displayType={"text"} thousandSeparator={true} />
                                )
                                }
                            </div>
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
        </Container>
    )
}

export default Calc
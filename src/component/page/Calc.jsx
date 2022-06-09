import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/calc.scss';
import NumberFormat from 'react-number-format';

function Calc() {
    const [prestate, setPrestate] = useState('');
    const [curstate, setCurstate] = useState('');
    const [input, setInput] = useState('0');
    const [operator, setOperator] = useState(null);
    const [total, setTotal] = useState(false);

    const inputNum = (e) => {
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
        };

        let cal
        switch (operator) {
            case "+":
                cal = String(parseFloat(prestate) + parseFloat(curstate));
                break;
            case "-":
                cal = String(parseFloat(prestate) - parseFloat(curstate));
                break;
            case "x":
                cal = String(parseFloat(prestate) * parseFloat(curstate));
                break;
            case "/":
                cal = String(parseFloat(prestate) / parseFloat(curstate));
                break;
            default:
                return;
        }
        setInput("");
        setPrestate(cal);
        setCurstate("");
    }


    const minusPlus = () => {

    };

    const percent = () => {

    };

    const clear = () => {
        setPrestate("");
        setCurstate("");
        setInput("0");
    };

    // const backspace = () => {
    // }

    return (
        <div className='w-100 h-auto d-flex align-item-center justify-content-center'>
            <div className='shadow-lg p-3 bg-body rounded-3 center'>

                <div className='m-2 mt-3'>

                    {/* <input className='w-100 p-4 border border-2 border-dark rounded-3 h1 i' type="text" name="" id="input"

                        // {input !== "" || input === "0" ? (
                        //     <NumberFormat value={input} displayType={"text"} thousandSeparator={true} />
                        // ) : (
                        //     <NumberFormat value={prestate} displayType={"text"} thousandSeparator={true} />
                        // )
                        // }
                        
                        value={input} /> */}


                    <div className='w-100 p-4 border border-2 border-dark rounded-3 h1 i'  id="input">
                        {input !== "" || input === "0" ? (
                            <NumberFormat value={input} displayType={"text"} thousandSeparator={true} />
                        ) : (
                            <NumberFormat value={prestate} displayType={"text"} thousandSeparator={true} />
                        )
                        }
                    </div>
                </div>

                <div className='m-2 mt-3'>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark' id='clear' onClick={clear}>C</button>
                        <button type='button' className='w btn btn-outline-dark' onClick={minusPlus}>±</button>
                        {/* <button type='button' className='w btn btn-outline-dark' id='backspace' onClick={backspace}>c</button> */}
                        <button type='button' className='w btn btn-outline-dark' onClick={percent}>%</button>
                        <button type='button' className='w btn btn-outline-dark' name='/' onClick={operatorType}>/</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark' name='7' onClick={inputNum}>7</button>
                        <button type='button' className='w btn btn-outline-dark' name='8' onClick={inputNum}>8</button>
                        <button type='button' className='w btn btn-outline-dark' name='9' onClick={inputNum}>9</button>
                        <button type='button' className='w btn btn-outline-dark' name='x' onClick={operatorType}>x</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark' name='4' onClick={inputNum}>4</button>
                        <button type='button' className='w btn btn-outline-dark' name='5' onClick={inputNum}>5</button>
                        <button type='button' className='w btn btn-outline-dark' name='6' onClick={inputNum}>6</button>
                        <button type='button' className='w btn btn-outline-dark' name='-' onClick={operatorType}>-</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark' name='1' onClick={inputNum}>1</button>
                        <button type='button' className='w btn btn-outline-dark' name='2' onClick={inputNum}>2</button>
                        <button type='button' className='w btn btn-outline-dark' name='3' onClick={inputNum}>3</button>
                        <button type='button' className='w btn btn-outline-dark' name='+' onClick={operatorType}>+</button>
                    </div>
                    <div className='mb-3 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark' name='0' onClick={inputNum}>0</button>
                        <button type='button' className='w btn btn-outline-dark' name='.' onClick={inputNum}>∙</button>
                        {/* <button type='button' className='w btn btn-outline-dark'>←</button> */}
                        <button type='button' className='w-48 btn btn-outline-dark' id='equal' onClick={equal}>=</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calc
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/calc.css';

function Calc() {
    const [number, setNumber] = useState('');

    const click = (e) => {
        // setNumber(e.target.name);
        setNumber(number.concat(e.target.name));
    }

    const clear = () => {
        setNumber('');
    }

    const backspace = () => {
        setNumber(number.slice(0, -1));
    }

    return (
        <div className='w-100 h-auto d-flex align-item-center justify-content-center'>
            <div className='shadow-lg p-3 bg-body rounded-3 center'>

                <div className='m-2 mt-3'>
                    <input className='w-100 p-4 border border-2 border-dark rounded-3 h1 i' type="text" name="" id="input" value={number} />
                </div>

                <div className='m-2 mt-3'>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w-48 btn btn-outline-dark' id='clear' onClick={clear}>clear</button>
                        {/* <button type='button' className='w btn btn-outline-dark'>±</button> */}
                        <button type='button' className='w btn btn-outline-dark' id='backspace' onClick={backspace}>c</button>
                        {/* <button type='button' className='w btn btn-outline-dark'>%</button> */}
                        <button type='button' className='w btn btn-outline-dark'>/</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark' name='7' onClick={click}>7</button>
                        <button type='button' className='w btn btn-outline-dark' name='8' onClick={click}>8</button>
                        <button type='button' className='w btn btn-outline-dark' name='9' onClick={click}>9</button>
                        <button type='button' className='w btn btn-outline-dark'>x</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark' name='4' onClick={click}>4</button>
                        <button type='button' className='w btn btn-outline-dark' name='5' onClick={click}>5</button>
                        <button type='button' className='w btn btn-outline-dark' name='6' onClick={click}>6</button>
                        <button type='button' className='w btn btn-outline-dark'>-</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark' name='1' onClick={click}>1</button>
                        <button type='button' className='w btn btn-outline-dark' name='2' onClick={click}>2</button>
                        <button type='button' className='w btn btn-outline-dark' name='3' onClick={click}>3</button>
                        <button type='button' className='w btn btn-outline-dark'>+</button>
                    </div>
                    <div className='mb-3 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark' name='0' onClick={click}>0</button>
                        <button type='button' className='w btn btn-outline-dark' name='.' onClick={click}>∙</button>
                        {/* <button type='button' className='w btn btn-outline-dark'>←</button> */}
                        <button type='button' className='w-48 btn btn-outline-dark' id='equal'>=</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calc
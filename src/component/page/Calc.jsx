import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/calc.css';

function Calc() {
    return (
        <div className='w-100 h-auto d-flex align-item-center justify-content-center'>
            <div className='shadow-lg p-3 bg-body rounded-3 center'>

                <div className='m-2 mt-3'>
                    <input className='w-100 p-4 border border-2 border-dark rounded-3 h1' type="text" name="" id="" />
                </div>

                <div className='m-2 mt-3'>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark'>c</button>
                        <button type='button' className='w btn btn-outline-dark'>±</button>
                        <button type='button' className='w btn btn-outline-dark'>%</button>
                        <button type='button' className='w btn btn-outline-dark'>／</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark'>7</button>
                        <button type='button' className='w btn btn-outline-dark'>8</button>
                        <button type='button' className='w btn btn-outline-dark'>9</button>
                        <button type='button' className='w btn btn-outline-dark'>x</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark'>4</button>
                        <button type='button' className='w btn btn-outline-dark'>5</button>
                        <button type='button' className='w btn btn-outline-dark'>6</button>
                        <button type='button' className='w btn btn-outline-dark'>-</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark'>3</button>
                        <button type='button' className='w btn btn-outline-dark'>2</button>
                        <button type='button' className='w btn btn-outline-dark'>1</button>
                        <button type='button' className='w btn btn-outline-dark'>+</button>
                    </div>
                    <div className='mb-3 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w btn btn-outline-dark'>0</button>
                        <button type='button' className='w btn btn-outline-dark'>∙</button>
                        <button type='button' className='w btn btn-outline-dark'>←</button>
                        <button type='button' className='w btn btn-outline-dark'>=</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Calc
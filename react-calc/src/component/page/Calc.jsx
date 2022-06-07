import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../page/calc.css';
function Calc() {
    return (
        <div className='w-100 h-auto d-flex align-item-center justify-content-center'>
            <div className='border border-5 rounded-3 center'>
                <div className='m-2 mt-3'>
                    <input className='w-100 p-4' type="text" name="" id="" />
                </div>
                <div className='m-2 mt-3'>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w-20 btn btn-outline-secondary'>c</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>±</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>%</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>／</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w-20 btn btn-outline-secondary'>7</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>8</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>9</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>x</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w-20 btn btn-outline-secondary'>4</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>5</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>6</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>-</button>
                    </div>
                    <div className='mb-2 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w-20 btn btn-outline-secondary'>3</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>2</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>1</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>+</button>
                    </div>
                    <div className='mb-3 d-flex align-item-center justify-content-between'>
                        <button type='button' className='w-20 btn btn-outline-secondary'>0</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>∙</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>←</button>
                        <button type='button' className='w-20 btn btn-outline-secondary'>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calc
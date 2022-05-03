import React from 'react';
import './Rockers.css'
import MINUS_ICON from '../../../static/icons8-minus.png'
import PLUS_ICON from '../../../static/plus.png'


// reusable functional Quantity Rocker component with customisable, minimum, maximum and step values
function Rockers({ quantity , setterCallback, min, max, step }) {

    //function to decrement quantity of rocker value
    function minusFunction() {
        if (step) {
            let x = quantity - step
            setterCallback(x)
        }
        else {
            let x = quantity - 1
            setterCallback(x)
        }
        
    }

    //function to increment quantityof rocker value
    function plusFunction() {
        if (step) {
            let x = quantity + step
            setterCallback(x)
        }
        else {
            let x = quantity + 1
            setterCallback(x)
        }
    }

    let live_min = 0
    if (min) {
        live_min = min
    }

    let live_max = 5
    if (max) {
        live_max = max
    }

    return (
        <div className='rocker-div'>
            { quantity <= live_min   ?
                <div className='rocker-icon-minus-foreground'  >
                    <img className='rocker-icon-minus' src={ MINUS_ICON }></img>
                </div>
                :
                <div className='rocker-icon-minus-foreground-active' onClick={minusFunction}>
                    <img className='rocker-icon-minus' src={ MINUS_ICON }></img>
                </div>
                }
                <div className='rocker-quantity-foreground'>
                    <div className='rocker-quantity-value'>{ quantity }</div>
                </div>
                { quantity < live_max   ?
                <div className='rocker-icon-plus-foreground' onClick={plusFunction}>
                    <img className='rocker-icon-plus' src={ PLUS_ICON }></img>
                </div>
                :
                <div className='rocker-icon-plus-foreground-deactive' >
                    <img className='rocker-icon-plus' src={ PLUS_ICON }></img>
                </div>
                }
        </div>
    );
}

export default Rockers;
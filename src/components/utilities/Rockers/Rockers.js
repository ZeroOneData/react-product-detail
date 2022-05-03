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

    //conditional logic for optional min and max props
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
            { quantity <= live_min   ? //turn rocker on or off
                <div className='rocker-icon-minus-foreground'  >
                    <img className='rocker-icon-minus' src={ MINUS_ICON } alt=''></img>
                </div>
                :
                <div className='rocker-icon-minus-foreground-active' onClick={minusFunction}>
                    <img className='rocker-icon-minus' src={ MINUS_ICON } alt=''></img>
                </div>
                }
                <input 
                    type='number' 
                    className='rocker-quantity-foreground' 
                    value={quantity} 
                    max={live_max}
                    min={live_min}
                    onChange={(e) => {

                        //handle logic for incorrect input incl. min and max bounderies
                        const value = Math.floor(e.target.value)  
                        if(value > live_max){
                            setterCallback(quantity)
                        }
                        else if(value < live_min){
                            setterCallback(quantity)
                        }
                        else{
                            setterCallback(value)
                        }
                        }}
                    />
                { quantity < live_max   ?  //turn rocker on or off 
                <div className='rocker-icon-plus-foreground' onClick={plusFunction}>
                    <img className='rocker-icon-plus' src={ PLUS_ICON } alt=''></img>
                </div>
                :
                <div className='rocker-icon-plus-foreground-deactive' >
                    <img className='rocker-icon-plus' src={ PLUS_ICON } alt=''></img>
                </div>
                }
        </div>
    );
}

export default Rockers;
// import React from 'react';
import './Badges.css'
import IN_STOCK from '../../../../static/icons8-ok.png'

function Badges({properties}) {
    return (
        <div className='div-badges'>
            { properties.ready_to_ship &&    // check if ready-to-ship is true -> render accordingly
            <div className='div-rts-background'>
                <div className='label-rts'>Ready to Ship</div>
            </div>
            }
            { properties.in_stock && // check if in_stock is true -> render accordingly
            <div className='div-instock-background'>
                <img className="image-instock" src =  { IN_STOCK }></img>
                <div className='label-instock'>In Stock</div>
            </div>
            }
            { properties.fast_dispatch &&   // check if fast_dispatch is true -> render accordingly
            <div className='div-fast-despatch-background'>
                <img className="image-fast-despatch" src =  { IN_STOCK }></img>
                 <div className='label-fast-despatch'>Fast Despatch</div>
            </div>
            }
        </div>
    );
}

export default Badges;
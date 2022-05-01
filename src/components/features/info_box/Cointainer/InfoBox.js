// import React from 'react';
import './InfoBox.css'
import MINUS_ICON from '../../../../static/icons8-minus.png'
import PLUS_ICON from '../../../../static/plus.png'
import TRADE_ICON from '../../../../static/trade_icon.svg'
import VISA_ICON from '../../../../static/pay_visa.svg'
import MASTERCARD_ICON from '../../../../static/pay_mastercard.svg'
import APPLE_ICON from '../../../../static/pay_apple.svg'
import Badges from '../Badges/Badges';
import RatingsBox from '../RatingsBox/RatingsBox'
import PriceBox from '../PriceBox/PriceBox'
import ExpoBox from '../ExpoBox/ExpoBox'
import CountdownTimer from '../CountdownTimer/CountdownTimer'

function InfoBox({ product, qty1080p, qty4K, qtyBattery, setQty1080p, setQty4K, setQtyBattery}) {

    function decrement1080p() {
        let x = qty1080p - 1
        setQty1080p(x)
    }

    function decrement4K() {
        let x = qty4K - 1
        setQty4K(x)
    }

    function decrementBattery() {
        let x = qtyBattery - 1
        setQtyBattery(x)
    }

    function increment1080p() {
        let x = qty1080p + 1
        setQty1080p(x)
    }

    function increment4K() {
        let x = qty4K + 1
        setQty4K(x)
    }

    function incrementBattery() {
        let x = qtyBattery + 1
        setQtyBattery(x)
    }

    

    //remove when done
    // console.log(name.product.name)

    return (
        <div className='div-info-box'>
            <Badges properties={product.product.shipping.props}/>
            <div className='label-product-name'>
                {product.product.name}
            </div>
            <div className='div-hot-sale-background'>
                <div className='label-hot-sale'>
                    Hot sale products
                </div>
            </div>
            <RatingsBox
                rating={product.product.reviews.rating}
                count={product.product.reviews.count}
                buyers={product.product.reviews.total_buyers}
            />
            <PriceBox options={product.product.options}/>
            <ExpoBox />
            <CountdownTimer discount={product.product.discount}/>
        <div className='div-product'>
            <div className='div-product-row'>
                <div className='label-product-attribute'>Options:</div>
                <div className='label-product-option-name'>1080P</div>
                <div className='label-product-option-price'>R 833.99</div>
                <div className='div-product-quantinity'>
                    { qty1080p < 1   ?
                    <div className='button-icon-minus-foreground' >
                        <img className='button-icon-minus' src={ MINUS_ICON }></img>
                    </div>
                    :
                    <div className='button-icon-minus-foreground-active' onClick={decrement1080p}>
                        <img className='button-icon-minus' src={ PLUS_ICON }></img>
                    </div>
                    }

                    <div className='input-quantity-foreground'>
                        <div className='label-quantity-value'>{qty1080p}</div>
                    </div>
                    <div className='button-icon-plus-foreground' onClick={increment1080p}>
                        <img className='button-icon-plus' src={ PLUS_ICON }></img>
                    </div>
                </div>
            </div>
            <div className='div-product-row' style={{marginTop: 52}}>
            <div className='label-product-attribute'></div>
                <div className='label-product-option-name'>4K</div>
                <div className='label-product-option-price'>R 895.31</div>
                <div className='div-product-quantinity'>
                    { qty4K < 1   ?
                    <div className='button-icon-minus-foreground'  >
                        <img className='button-icon-minus' src={ MINUS_ICON }></img>
                    </div>
                    :
                    <div className='button-icon-minus-foreground-active' onClick={decrement4K}>
                        <img className='button-icon-minus' src={ PLUS_ICON }></img>
                    </div>
                    }
                    
                    <div className='input-quantity-foreground'>
                        <div className='label-quantity-value'>{ qty4K }</div>
                    </div>
                    <div className='button-icon-plus-foreground' onClick={increment4K}>
                        <img className='button-icon-plus' src={ PLUS_ICON }></img>
                    </div>
                </div>
            </div>
            <div className='div-product-row' style={{marginTop: 104}}>
                <div className='label-product-attribute'></div>
                <div className='label-product-option-name'>Battery (accessories)</div>
                <div className='label-product-option-price'>R 78.50</div>
                <div className='div-product-quantinity' >
                    { qtyBattery < 1   ?
                    <div className='button-icon-minus-foreground'>
                        <img className='button-icon-minus' src={ MINUS_ICON }></img>
                    </div>
                    :
                    <div className='button-icon-minus-foreground-active' onClick={decrementBattery}>
                        <img className='button-icon-minus' src={ PLUS_ICON }></img>
                    </div>
                    }
                    <div className='input-quantity-foreground'>
                        <div className='label-quantity-value'>{qtyBattery}</div>
                    </div>
                    <div className='button-icon-plus-foreground' onClick={incrementBattery}>
                        <img className='button-icon-plus' src={ PLUS_ICON }></img>
                    </div>
                </div>
            </div>
        </div>
        <div className='div-trade-assurance'>
            <img className='icon-trade-assurance' src={ TRADE_ICON }></img>
            <div className='label-trade'>Trade Assurance</div>
            <div className='label-alibab'> protects your Alibaba.com orders</div>
        </div>
        <div className='div-payments'>
            <div className='label-payments'>Payments</div>
            <img className='icon-visa' src={ VISA_ICON }></img>
            <img className='icon-mastercard' src={ MASTERCARD_ICON }></img>
            <img className='icon-apple-pay' src={ APPLE_ICON }></img>
        </div>
        <div className='div-links'>
            <div className='label-link-alibab'>Alibaba.com Logistics</div>
            <div className='label-link-inspection'>Inspection Solutions</div>
        </div>
    </div>
    );
}

export default InfoBox;
import './ProductBox.css'
import MINUS_ICON from '../../../../static/icons8-minus.png'
import PLUS_ICON from '../../../../static/plus.png'

function ProductBox({ product, qty1080p, qty4K, qtyBattery, setQty1080p, setQty4K, setQtyBattery }) {

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

    const option_labels = Object.values(product.product.options)
    console.log(option_labels)

    return (
        <div className='div-product'>
        <div className='div-product-row'>
            <div className='label-product-attribute'>Options:</div>
            <div className='label-product-option-name'>{option_labels[0].label}</div>
            <div className='label-product-option-price'>{`${option_labels[0].price.currency.symbol} ${option_labels[0].price.value}`}</div>
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
            <div className='label-product-option-name'>{option_labels[1].label}</div>
            <div className='label-product-option-price'>{`${option_labels[1].price.currency.symbol} ${option_labels[1].price.value}`}</div>
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
            <div className='label-product-option-name'>{option_labels[2].label}</div>
            <div className='label-product-option-price'>{`${option_labels[2].price.currency.symbol} ${option_labels[2].price.value.toFixed(2)}`}</div>
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
    );
}

export default ProductBox;
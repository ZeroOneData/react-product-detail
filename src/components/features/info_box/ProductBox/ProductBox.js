import './ProductBox.css'
import Rockers from '../../../utilities/Rockers/Rockers'

function ProductBox({ product, qty1080p, qty4K, qtyBattery, setQty1080p, setQty4K, setQtyBattery }) {

    const option_labels = Object.values(product.product.options)
    console.log(option_labels)

    return (
        <div className='div-product'>
            <div className='div-product-row-1'>
                <div className='label-product-attribute'>Options:</div>
                <div className='label-product-option-name'>{option_labels[0].label}</div>
                <div className='label-product-option-price'>{`${option_labels[0].price.currency.symbol} ${option_labels[0].price.value}`}</div>
                <div className='div-product-quantinity'>
                    <Rockers setterCallback={setQty1080p} quantity={qty1080p}  min={0} max={10} step={1}/>
                </div>
            </div>
            <div className='div-product-row-2'>
                <div className='label-product-attribute'></div>
                <div className='label-product-option-name'>{option_labels[1].label}</div>
                <div className='label-product-option-price'>{`${option_labels[1].price.currency.symbol} ${option_labels[1].price.value}`}</div>
                <div className='div-product-quantinity'>
                    <Rockers setterCallback={setQty4K} quantity={qty4K}  min={0} max={10} step={1}/>
                </div>
            </div>
            <div className='div-product-row-3'>
                <div className='label-product-attribute'></div>
                <div className='label-product-option-name'>{option_labels[2].label}</div>
                <div className='label-product-option-price'>{`${option_labels[2].price.currency.symbol} ${option_labels[2].price.value.toFixed(2)}`}</div>
                <div className='div-product-quantinity' >
                    <Rockers setterCallback={setQtyBattery} quantity={qtyBattery} min={0} max={50} step={1}/>
                </div>
            </div>
        </div>
    );
}

export default ProductBox;
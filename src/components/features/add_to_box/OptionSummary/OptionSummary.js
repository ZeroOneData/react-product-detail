import './OptionSummary.css'

function OptionSummary({ product, qty1080p, qty4K, qtyBattery }) {

    const options_array = Object.values(product.product.options)
    const currency = options_array[0].price.currency.symbol
    
    const total_1080p = options_array[0].price.value * qty1080p
    const total_4k = options_array[1].price.value * qty4K
    const total_battery = options_array[2].price.value * qtyBattery

    const total_values = total_1080p + total_4k + total_battery

    return (
        <div className='div-top-content'>
            <div className='div-product-row-summary'>
                <div className='label-product-attribute-summary'>Cart Summary:</div>
                { qty1080p ? 
                <>
                    <div className='label-product-option-name-summary'>{options_array[0].label}</div>
                    <div className='label-product-option-price-summary'>{`${currency} ${((options_array[0]. price.value) * qty1080p).toFixed(2)}`}</div>
                </>
                :
                <></>
                }  
            </div> 
            { qty4K ?
            <div className='div-product-row-summary' style={{marginTop: 46}}>
                <div className='label-product-attribute-summary'></div>
                <div className='label-product-option-name-summary'>{options_array[1].label}</div>
                <div className='label-product-option-price-summary'>{`${currency} ${((options_array[1]. price.value) * qty4K).toFixed(2)}`}</div>
            </div>
            :
            <div className='div-product-row-summary' style={{marginTop: 46}} />
            }
            { qtyBattery ? 
            <div className='div-product-row-summary' style={{marginTop: 92}}>
                <div className='label-product-attribute-summary'></div>
                <div className='label-product-option-name-summary'>{options_array[2].label}</div>
                <div className='label-product-option-price-summary'>{`${currency} ${((options_array[2]. price.value) * qtyBattery).toFixed(2)}`}</div>
            </div>
            :
            <div className='div-product-row-summary' style={{marginTop: 92}} />
            }
              
            <hr style = {{marginTop: 160, marginLeft: 24, marginRight: 10}}></hr>
            <div className='label-product-total-summary'>Total:</div>
            <div className='label-product-total-summary-value'>{`${currency} ${total_values.toFixed(2)}`}</div>
            
        </div>
    );
}

export default OptionSummary;
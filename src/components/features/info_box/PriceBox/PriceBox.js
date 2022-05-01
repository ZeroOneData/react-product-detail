import './PriceBox.css'

function PriceBox({ options }) {

    const extractedOptions = Object.values(options) //convert options object to array of values. 
    const currency = options.battery_accessories.price.currency.symbol //extract currency symbol 

    return (
        <div className="div-price-box-foreground">
            <div className="label-price-range">
                {`${currency} ${options.battery_accessories.price.value.toFixed(2)} - ${currency} ${extractedOptions[1].price.value.toFixed(2)}`}
            </div>
            <div className="label-option">/ Option</div>
            <div className="label-divider">|</div>
            <div className="label-options">2 Options</div>
            <div className="label-min-order">(Min.Order)</div>
            <div className='label-price-range-cross'>
            {`${currency} ${options.battery_accessories.old_price.value.toFixed(2)} - ${currency} ${extractedOptions[1].old_price.value.toFixed(2)}`}
            </div>
        </div>
    );
}

export default PriceBox;
import './AddToDetail.css'
import INFO_ICON from '../../../../static/info.png'
import ENVELOPE_ICON from '../../../../static/envelope.png'
import Tippy from '@tippy.js/react'
import  'tippy.js/dist/tippy.css'

function AddToDetail({ shipping }) {
    return (
        <div className='div-bottom-content'>
            <div className='label-ship-to-south-africa'>
                <>Ship to</>
                <><u>{(` ${shipping.method.country} by ${(shipping.method.title)}`).slice(0, 32)}...</u></>
            </div>
            <div className='label-total-cost'>
                {`${shipping.method.cost.currency.symbol} ${shipping.method.cost.value.toFixed(2)}`}
            </div>
            <div className='div-lead-time'>
                <div className='label-lead-time'>{`Lead Time ${shipping.lead_time.value}`}</div>
                <Tippy content={shipping.lead_time.info}>
                    <img  className='icon-lead-time' src={ INFO_ICON }></img>
                </Tippy>
            </div>
            <div className='div-shipping-time'>
                <div className='label-shipping-time'>{`Shipping time ${shipping.method.shipping_time.value}`}</div>
                <Tippy content={shipping.method.shipping_time.info}>
                    <img className='icon-shipping-time' src={ INFO_ICON }></img>
                </Tippy>
            </div>
            <div className='button-login-background'>
                <div className='button-login-label'>Login to Purchase</div>
            </div>
            <div className='button-supplier-background'>
                <img className='button-supplier-icon' src={ ENVELOPE_ICON }></img>
                <div className='button-supplier-label'>Contact the Supplier</div>
            </div>
        </div>
    );
}

export default AddToDetail;
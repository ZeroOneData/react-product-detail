import './AddToBox.css'
import INFO_ICON from '../../../static/info.png'
import ENVELOPE_ICON from '../../../static/envelope.png'

function AddToBox({ product }) {
    return (
        <div className='div-add-to-box'>
            <div className='label-ship-to-south-africa'>Ship to South Africa by Express UPS Sav…</div>
            <div className='label-total-cost'>R 6,036.74</div>
            <div className='div-lead-time'>
                <div className='label-lead-time'>Lead Time 10 days</div>
                <img className='icon-lead-time' src={ INFO_ICON }></img>
            </div>
            <div className='div-shipping-time'>
                <div className='label-shipping-time'>Shipping time 6-10 days</div>
                <img className='icon-shipping-time' src={ INFO_ICON }></img>
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

export default AddToBox;
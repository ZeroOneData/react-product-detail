import './PaymentsBox.css'
import VISA_ICON from '../../../../static/pay_visa.svg'
import MASTERCARD_ICON from '../../../../static/pay_mastercard.svg'
import APPLE_ICON from '../../../../static/pay_apple.svg'

function PaymentsBox() {
    return (
        <div className='div-payments'>
            <div className='label-payments'>Payments</div>
            <img className='icon-visa' src={ VISA_ICON }></img>
            <img className='icon-mastercard' src={ MASTERCARD_ICON }></img>
            <img className='icon-apple-pay' src={ APPLE_ICON }></img>
        </div>
    );
}

export default PaymentsBox;
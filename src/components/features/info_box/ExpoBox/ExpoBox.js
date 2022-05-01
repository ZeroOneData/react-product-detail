import './ExpoBox.css'
import LOGO from '../../../../static/Logo.png'
import FORWARD_ICON from '../../../../static/icons8-forward.png'

function ExpoBox(props) {
    return (
        <div className='div-expo-background'>
            <img className="logo-expo"  src={ LOGO }></img>
            <div className='label-free-shipping'>•  Free shipping (up to $40)</div>
            <div className='label-on-time-delivery'>•  On-time delivery guaranteed</div>
            <img className="image-expo"  src={ FORWARD_ICON }></img>
        </div>
    );
}

export default ExpoBox;
import './TradeAssuranceBox.css'
import TRADE_ICON from '../../../../static/trade_icon.svg'

function TradeAssuranceBox(props) {
    return (
        <div className='div-trade-assurance'>
        <img className='icon-trade-assurance' src={ TRADE_ICON }></img>
        <div className='label-trade'>Trade Assurance</div>
        <div className='label-alibab'> protects your Alibaba.com orders</div>
    </div>
    );
}

export default TradeAssuranceBox;
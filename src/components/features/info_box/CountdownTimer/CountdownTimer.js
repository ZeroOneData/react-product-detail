import './CountdownTimer.css'
import CLOCK_ICON from '../../../../static/icons8-clock.png'
import Countdown from 'react-countdown';

function CountdownTimer({ discount }) {

    //  function to implement active countdown timer component and logic
    const renderer = ({ hours, minutes, seconds, days }) => {
        return  <div className='label-date-time'>
                    {`${days}d:${hours}h:${minutes}m:${seconds}s`}
                </div>;
            };

    return (
        <div className='div-countdown-timer'>
            <div className='label-discount'>{`${discount.amount} OFF`}</div>
            <div className='label-discount-end'>Discount ends in</div>
            <img className="icon-discount-end"  src={ CLOCK_ICON }></img>
            <Countdown date={discount.end_date} renderer={renderer} />
        </div>
    );
}

export default CountdownTimer;
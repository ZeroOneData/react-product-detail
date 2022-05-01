import './RatingsBox.css'
import STAR_RATING from '../../../../static/icons8-star_filled.png'

function RatingsBox({ rating, count, buyers }) {
    return (
        <div className='div-ratings-box'>
            <div className='div-stars-box'>
                <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
                <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
                <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
                <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
                <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
            </div>
            <div className="label-rating">{`${rating}`}</div>
            <div className="label-reviews">{`${count} Reviews`}</div>
            <div className="label-buyers">{`${buyers} buyers`}</div>
        </div>
    );
}

export default RatingsBox;
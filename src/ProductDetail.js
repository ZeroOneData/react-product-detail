import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import IN_STOCK from './static/icons8-ok.png'
import STAR_RATING from './static/icons8-star_filled.png'
import LOGO from './static/Logo.png'
import FORWARD_ICON from './static/icons8-forward.png'
import CLOCK_ICON from './static/icons8-clock.png'

function ProductDetail(props) {

    const [product, setProduct] = useState([]);
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [errorCode, setErrorCode] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [openErrorDialog, setOpenErrorDialog] = useState(false);
    // const classes = useStyles()

    useEffect(() => {
        fetch(`https://fe-assignment.vaimo.net/`)
        .then(res => {
            if(!res.ok) {
                setErrorCode(res.status)
                throw Error(`${res.status} - ${res.statusText}`)
            }
            return res.json()
        })
        .then(data => {
            setProduct(data)
            setName(data.product.name)
            setImage(data.product.gallery[0].main)
            console.log(data.product.gallery[0].main)
            setIsLoading(false)
            setError(null)
            setErrorCode(null)
            setOpenErrorDialog(false)
        })
        .catch(err => {
            setError(err.message)
            setOpenErrorDialog(true)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className='div-main'>
            {/* <div style={{display: 'flex'}}> */}
            <img  className="image" src =  {`${image}`}></img>
            <div className='div-info-box'>
                <div className='div-badges'>
                    <div className='div-rts-background'>
                        <div className='label-rts'>Ready to Ship</div>
                    </div>
                    <div className='div-instock-background'>
                        <img className="image-instock" src =  { IN_STOCK }></img>
                        <div className='label-instock'>In Stock</div>
                    </div>
                    <div className='div-fast-despatch-background'>
                        <img className="image-fast-despatch" src =  { IN_STOCK }></img>
                         <div className='label-fast-despatch'>Fast Despatch</div>
                    </div>
                </div>
                <div className='label-product-name'>
                    {name}
                </div>
                <div className='div-hot-sale-background'>
                    <div className='label-hot-sale'>
                        Hot sale products
                    </div>
                </div>
                <div className='div-ratings-box'>
                    <div className='div-stars-box'>
                        <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
                        <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
                        <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
                        <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
                        <img className="image-ratings-box" style={{marginRight: '4px'}} src={ STAR_RATING }></img>
                    </div>
                    <div className="label-rating">5.0</div>
                    <div className="label-reviews">7 Reviews</div>
                    <div className="label-buyers">19 buyers</div>
                </div>
                <div className="div-price-box-foreground">
                    <div className="label-price-range">R 78.50 - R 895.31</div>
                    <div className="label-option">/ Option</div>
                    <div className="label-divider">|</div>
                    <div className="label-options">2 Options</div>
                    <div className="label-min-order">(Min.Order)</div>
                    <div className='label-price-range-cross'>R 98.12 - R 1,119.14</div>

                </div>
                <div className='div-expo-background'>
                    <img className="logo-expo"  src={ LOGO }></img>
                    <div className='label-free-shipping'>•  Free shipping (up to $40)</div>
                    <div className='label-on-time-delivery'>•  On-time delivery guaranteed</div>
                    <img className="image-expo"  src={ FORWARD_ICON }></img>
                </div>
                <div className='div-countdown-timer'>
                    <div className='label-discount'>20% OFF</div>
                    <div className='label-discount-end'>Discount ends in</div>
                    <img className="icon-discount-end"  src={ CLOCK_ICON }></img>
                    <div className='label-date-time'>2d:01h:56m:49s</div>
                </div>
                <div className='div-product'>
                    <div className='div-product-row'></div>
                    <div className='div-product-row' style={{marginTop: 52}}></div>
                    <div className='div-product-row' style={{marginTop: 104}}></div>
                </div>
            </div>
            <div className='div-add-to-box'>

            </div>
            {/* </div> */}
            <div className='div-background'></div>
        </div>

    )    
}

export default ProductDetail;
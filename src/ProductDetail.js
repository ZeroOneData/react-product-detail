import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import InfoBox from './components/features/info_box/Cointainer/InfoBox'
import AddToBox from './components/features/add_to_box/AddToBox'

function ProductDetail(props) {

    const [product, setProduct] = useState([]);
    const [clonedProduct, setClonedProduct] = useState([])
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [qty1080p, setQty1080p] = useState(0);
    const [qty4K, setQty4K] = useState(0);
    const [qtyBattery, setQtyBattery] = useState(0);
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
        .finally(() => {
            setIsLoading(false);
          });
    }, [])

    if (isLoading) {
        return <p>Data is loading...</p>;
      }

    return (
        <div className='div-main'>
            {/* <div style={{display: 'flex'}}> */}
            <img  className="image" src= {`${image}`}></img>
            <InfoBox 
                product={product} 
                qty1080p={qty1080p} 
                qty4K={qty4K} 
                qtyBattery={qtyBattery} 
                setQty1080p={setQty1080p}
                setQty4K={setQty4K}
                setQtyBattery={setQtyBattery} />
            <AddToBox product={product}/>
            {/* </div> */}
            <div className='div-background'></div>
        </div>

    )    
}

export default ProductDetail;
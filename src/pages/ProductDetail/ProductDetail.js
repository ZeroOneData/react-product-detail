import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import InfoBox from '../../components/features/info_box/Cointainer/InfoBox';
import AddToBox from '../../components/features/add_to_box/Container/AddToBox';

function ProductDetail() {

    const [product, setProduct] = useState([]);
    const [image, setImage] = useState(null);
    const [qty1080p, setQty1080p] = useState(0);
    const [qty4K, setQty4K] = useState(0);
    const [qtyBattery, setQtyBattery] = useState(0);
    const [error, setError] = useState(null);
    const [errorCode, setErrorCode] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [openErrorDialog, setOpenErrorDialog] = useState(false);

    //fetch data from api when component first mounts, and store in state
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
            setImage(data.product.gallery[0].main)
            setIsLoading(false)
            setError(null)
            setErrorCode(null)
            setOpenErrorDialog(false)
        })
        .catch(err => {             // catch any errors from api call
            setError(err.message)
            setOpenErrorDialog(true)
            setIsLoading(false)
        })
        .finally(() => {
            setIsLoading(false);  //finished fetching api data
          });
    }, [])

    //conditionally render content depending on loading and/or error states
    if (isLoading) {
        return <h3>Data is loading...</h3>;
      }
    if (openErrorDialog) {
        return <h3>{`Unable to reach the api: ${errorCode} - ${error}`}</h3>
    }

    return (
        <div className='div-main'>
            <img  className="image" src= {`${image}`} alt=''></img>
            <InfoBox 
                product={product} 
                qty1080p={qty1080p} 
                qty4K={qty4K} 
                qtyBattery={qtyBattery} 
                setQty1080p={setQty1080p}
                setQty4K={setQty4K}
                setQtyBattery={setQtyBattery}
            />
            <AddToBox 
                product={product} 
                qty1080p={qty1080p} 
                qty4K={qty4K} 
                qtyBattery={qtyBattery} 
            />
            <div className='div-background' />
        </div>
    )    
}

export default ProductDetail;
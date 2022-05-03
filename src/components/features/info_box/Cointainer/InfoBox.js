import './InfoBox.css'
import Badges from '../Badges/Badges';
import RatingsBox from '../RatingsBox/RatingsBox'
import PriceBox from '../PriceBox/PriceBox'
import ExpoBox from '../ExpoBox/ExpoBox'
import CountdownTimer from '../CountdownTimer/CountdownTimer'
import ProductBox from '../ProductBox/ProductBox'
import TradeAssuranceBox from '../TradeAssuranceBox/TradeAssuranceBox'
import PaymentsBox from '../PaymentsBox/PaymentsBox';
import LinksBox from '../LinksBox/LinksBox';
import ProductName from '../ProductName/ProductName';
import HotSaleBox from '../HotSaleBox/HotSaleBox';

function InfoBox({ product, qty1080p, qty4K, qtyBattery, setQty1080p, setQty4K, setQtyBattery}) {

    return (
        <div className='div-info-box'>
            <Badges properties={product.product.shipping.props}/>
            <ProductName name={product.product.name} />
            <HotSaleBox tag = {product.product.tags}/>
            <RatingsBox
                rating={product.product.reviews.rating}
                count={product.product.reviews.count}
                buyers={product.product.reviews.total_buyers}
            />
            <PriceBox options={product.product.options}/>
            <ExpoBox />
            <CountdownTimer discount={product.product.discount}/>
            <ProductBox 
                product={product} 
                qty1080p ={qty1080p}
                qty4K={qty4K} 
                qtyBattery={qtyBattery} 
                setQty1080p={setQty1080p} 
                setQty4K={setQty4K} 
                setQtyBattery={setQtyBattery} 
            />
            <TradeAssuranceBox/>
            <PaymentsBox />
            <LinksBox/>
    </div>
    );
}

export default InfoBox;
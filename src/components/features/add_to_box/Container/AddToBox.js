import './AddToBox.css'
import AddToDetail from '../AddToDetail/AddToDetail';
import OptionSummary from '../OptionSummary/OptionSummary';

function AddToBox({ product, qty1080p, qty4K, qtyBattery }) {

    if (qty1080p || qty4K || qtyBattery){
        return (
            <div className='div-add-to-box'>
                <OptionSummary 
                    product={product} 
                    qty1080p={qty1080p} 
                    qty4K={qty4K} 
                    qtyBattery={qtyBattery} 
                />
                <AddToDetail shipping={product.product.shipping}/>
            </div>
        );
    }
}

export default AddToBox;
import './HotSaleBox.css'

function HotSaleBox({ tag }) {
    return (
        <div className='div-hot-sale-background'>
                <div className='label-hot-sale'>
                    {tag}
                </div>
            </div>
    );
}

export default HotSaleBox;
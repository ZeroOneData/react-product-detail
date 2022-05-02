import './ProductName.css'

function ProductName({ name }) {
    return (
        <div className='label-product-name'>
                {name}
            </div>
    );
}

export default ProductName;
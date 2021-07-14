import React from 'react';

const Product = (props) => {
    const {product, addToCart} = props;

    return (
        <div style={{border:'1px solid tomato', margin:'4px', padding:'2px'}}>
            <h4>{product.name}</h4>
            <button style={{backgroundColor:'#F7A77C'}} onClick={() => addToCart(product.id,product.name)}>Add to cart</button>
        </div>
    );
};

export default Product;

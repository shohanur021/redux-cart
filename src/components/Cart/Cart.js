import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAtions';

const Cart = (props) => {
    // console.log(props)
    const {cart, removeFromCart} = props;

    return (
        <div style={{backgroundColor:'#D0F3F1',padding:'5px'}}>
            <h2>This  is Cart Section</h2>
            <ul>
                { 
                  cart.map(pd => <li key={pd.cartId}> {pd.name} 
                  <button style={{backgroundColor:'#EA2A87',color:'white',marginLeft:'6px'}} onClick={() => removeFromCart(pd.cartId)}>x</button>
                  </li>)
                }
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart : removeFromCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
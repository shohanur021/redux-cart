import { ADD_TO_CART, REMOVE_FROM_CART, } from "../actions/cartAtions";

const initialState = {
    cart: [],
    products: [
        { name: 'Lenevo Laptop', id: 1 },
        { name: 'Asus Laptop', id: 2 },
        { name: 'Dell Laptop', id: 3 },
        { name: 'Toshiba Laptop', id: 4 },
        { name: 'Hp Laptop', id: 5 }
    ]
}

const cartReducers = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length+1
            }
            const newcart = [...state.cart, newItem]
            return { ...state, cart: newcart }

        case REMOVE_FROM_CART:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId)
            return { ...state, cart: remainingCart }

        default:
            return state;
    }
}

export default cartReducers;
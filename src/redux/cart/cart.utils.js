import { triggerNotification } from '../../components/notification/notification';

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem){
        triggerNotification('Item Added to Cart');
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            :cartItem
            )
    }
    triggerNotification('Item Added to Cart')
    return [...cartItems, {...cartItemToAdd, quantity : 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        triggerNotification('Item Removed from cart')
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    triggerNotification('Item Removed from cart')
    return cartItems.map(
        cartItem => 
        cartItem.id === cartItemToRemove.id?
        {...cartItem, quantity: cartItem.quantity-1}
        : cartItem
    );
}
import React from 'react'
import { REMOVE_CART } from '../constantsToremoveCart'

function removeFromCart(data) {
    return {
        type:REMOVE_CART,
        data:data
    }
}

export default removeFromCart

import React from 'react'
import Home from '../components/Home'
import {connect} from 'react-redux'
import addToCart from '../services/Actions/actions'
import removeFromCart from '../services/Actions/RemoveCartAction'

const mapStateToProps = state =>({
    data:state
})
const mapDispatchToProps = dispatch=>({
    addToCartHandler:data =>dispatch(addToCart(data)),
    removeFromCartHandler:data => dispatch(removeFromCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home);




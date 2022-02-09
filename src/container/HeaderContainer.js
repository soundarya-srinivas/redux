import React from 'react'
import Home from '../components/Home'
import {connect} from 'react-redux'

import header from '../components/header'

const mapStateToProps = state =>({
    data:state
})
const mapDispatchToProps = dispatch=>({
   
})
export default connect(mapStateToProps,mapDispatchToProps)(header);




import React from 'react'

function header(props) {
    return (
        <div className="cart">
        <h1>
            cart:{props.data.cardItems.length}
        </h1>
    </div>
    )
}

export default header

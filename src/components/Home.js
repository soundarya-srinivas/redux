import React from 'react'


function Home(props) {
    console.log("props",props.data.cardItems);
    return (
        <div>
        
            
            <div className ="item">
                <img src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a22.jpg" />

                
                <span><br/>Samsung<br/></span>
               
            
                <span> Price:$1000.00<br/></span>
                
                <button onClick = {()=>{props.addToCartHandler({price:1000,
                name:"samsung"})}}>Add to cart</button>
               <button onClick = {
                   ()=>{props.removeFromCartHandler()}
               }>remove from cart</button>
            </div>
        </div>
    )
}

export default Home

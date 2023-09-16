import React from 'react'
import CartKorzinka from "../Korzinka/korzinkaCart" // universal cart import
import { useSelector } from 'react-redux'

const Korzinka = () => {

const cartItems = useSelector(state => state.cart.itemsList)

  return (

             <div  >
                    { cartItems.map((item) => (
                        <div key={item.id}> 
                          <CartKorzinka 
                          id={item.id} 
                          img={item.img} 
                          price={item.price}
                          weight={item.weight}
                          total={item.totalPrice} 
                          title={item.title} />
                        </div>
                    )) }
                
            </div>
  )
}

export default Korzinka
import React, { useState }  from 'react'
import { Outlet ,Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { cartActions } from '../../store/card-slice'
import Korzinka from "../Korzinka/korzinka"


const Main = () => {
  
  const cartItems = useSelector((state) => state.cart.itemsList)
  
  return (
    <div className=' bg-grays-200 h-[1200px]'>
      
        {/* Main cards section */}
         <div className='flex pt-[30px] ml-auto mr-auto'>
          {/* left side box "Korzinka" */}
            <div className="leftBox w-1/4 bg-grays-200 h-[1000px]">
            <Korzinka/>
                
            </div>
            
            {/* right side box */}
            <div className="rightBox w-3/4 bg-grays-200 h-[1000px]">
            <Outlet/>
            </div>
         </div>
      </div>
  )
}



export default Main
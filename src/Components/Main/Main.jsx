import React, { useState }  from 'react'
import { Outlet ,Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { cartActions } from '../../store/card-slice'
import Korzinka from "../Korzinka/korzinka"
import AllCount from "../CountCart/count-Cart"


const Main = ( ) => {
  const itemsList = useSelector((state) => state.cart.itemsList);

  // itemsList.forEach((item) => {
  //   total += item.totalPrice;
  // });
  const showCart = useSelector((state) => state.cart.showCart);
  
  const cartItems = useSelector((state) => state.cart.itemsList)
  
  return (
    <div className=' bg-grays-200 h-[1200px]'>
      
        {/* Main cards section */}
         <div className='flex pt-[30px] ml-auto mr-auto'>
          {/* left side box "Korzinka" */}
            <div className="leftBox w-1/4 bg-grays-200 h-[1000px]">
            <div className="" >
                <div className='w-[300px] rounded-[12px] max-h-[750px] h-[550px] ml-auto mr-auto mt-[130px] bg-white p-3 scroll-auto'>
                  {/* left side top part */}
                  <div className='flex justify-between  items-center  border-b-[1px] border-grays-300'>
                    {/* all count items section */}
                      <h1 className='text-black text-[24px] '>Корзина</h1>
                      <p className='w-[42px] h-[25px] rounded-[6px] bg-grays-200 text-center font-[12px] items-center'> <AllCount/></p>
                  </div>
                  {/* items list section */}
                   
                    <Korzinka  />
                       {/*  bootom side all of summ located in there */}
                       <div className='flex justify-between my-2'>
                    {/* total cost */}
                    <p className='text-base font-nunito font-medium'>Итого</p>
                    <p className='text-base font-nunito font-medium'>0</p>
                  </div>

                  {/* button part & left side */}
                  <button className='w-full h-[40px] rounded-[12px]  bg-numb-300 mt-[30px]'>
                    <p className='text-white font-medium font-nunito text-base'>Оформить заказ</p>
                  </button>
                  <div className='flex text-center items-center mt-[10px]'>
                    <img className='w-[24px] h-[24px] object-cover' src="https://static.vecteezy.com/system/resources/previews/018/742/236/non_2x/3d-minimal-product-delivery-motorbike-with-cardboxes-3d-illustration-free-png.png" alt="" />
                    <p className='font-medium text-xs font-nunito pl-3'>Бесплатная доставка</p>
                  </div>
                
                </div>
            </div>

                
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
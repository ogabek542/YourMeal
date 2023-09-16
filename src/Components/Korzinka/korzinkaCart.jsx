import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/card-slice'


const KorzinkaCart = ({id,img,price,title,weight,description,composition,calories, quantity,
    total}) => {
    const dispatch = useDispatch();
    // const quantity = useSelector((state) => state.cart.totalQuantity);
    // increment new cart action section
    const incrementCartItem = () => {
        dispatch(
            cartActions.addToCart({
                img,
                price,
                title,
                weight,
                quantity,
                total
            })
        );
    };
    // decrement new cart action section 
    const decrementCartItem = () => {
        dispatch(cartActions.removeFromCart(id));
    };
  return (

    <div className='flex justify-between items-center border-b-[1px] border-grays-300'>
    {/* left items div */}
    <div className='flex justify-between items-center'>
      <div>
        <img  className='w-[64px] h-[52px] rounded-[8px] my-3' src={img} alt={title} />
      </div>
      <div className='flex flex-col ml-2'>
        <p className='font-medium text-[12px] font-nunito'>{title}</p>
        <p className='font-medium text-[12px] font-nunito text-grays-300 '>{weight}</p>
        <p className='font-medium text-[12px] font-nunito'>{price}</p>
      </div>
    </div>
    {/* right items div  */}
    <div className='flex w-[84px] h-[40px] rounded-[12px] bg-grays-200 items-center justify-around'>
      <button  className='text-xs' onClick={decrementCartItem}>-</button>
      <p className='text-xs'>{quantity}</p>
      <button  className='text-xs' onClick={incrementCartItem}>+</button>
    </div>
  </div>
  )
}

export default KorzinkaCart
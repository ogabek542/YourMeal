import React,{useEffect,useState} from 'react'
import Zakuuski from "./Zakuski.json"
import { useSelector,useDispatch } from 'react-redux'
import { cartActions } from '../../store/card-slice'

const Zakuski = ({id,img,price,title,weight,description,composition,calories}) => {
  const [currentItem,setCurrentItem]=useState({})
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  const dispatch = useDispatch();
 
   const addToCart = () => {
      dispatch(cartActions.addToCart({
        id,
        img,
        price,
        title, // title === name
        weight,
        description,
        composition,
        calories
      }))
   }
  return (
    <div className='flex  rightBox w-[1000px] bg-grays-200 h-[1000px] flex-wrap '>
      {/* header section */}
              <div className='h-[25px] text-center inline-block'>
                  <h1 className='mt-[50px] text-[40px] h-[25px] text-center font-semibold inline-block'>Закуски</h1>
              </div>
      {/* bottom section  */}
      <div className='flex flex-wrap  -mt-[360px] gap-5'>
                {
                  Zakuuski.map( zakuskiApi => {
                    return (
                      <div className="flex" key={zakuskiApi.id}>
                        <div className='flex gap-x-[10px]' >
                              <div className='w-[300px] h-[411px] rounded-[12px] gap-x-2 bg-white justify-center items-center text-start p-2 '>
                              <img className='rounded-[12px] justify-center w-full h-[220px]' src={zakuskiApi.img} alt={zakuskiApi.title} />
                              <h3 className='font-semibold text-2xl font-nunito mt-1'>{zakuskiApi.price}₽</h3>
                              <h4 className='font-base font-medium font-nunito'>{zakuskiApi.title}</h4>
                              <p className='font-base font-semibold font-nunito text-grays-300 mt-[40px]'>{zakuskiApi.weight}г</p>
                              <button  onClick={addToCart} className='w-full h-[40px] bg-grays-200 rounded-[12px] mt-[10px] hover:bg-numb-300 hover:text-white'><p className='text-center font-base font-nunito font-medium leading-4 '>Добавить</p></button>
                            </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
  </div>
  )
}

export default Zakuski
import React,{useEffect,useState} from 'react'
import burgerJson from './Burger.json'
import { useSelector,useDispatch } from 'react-redux'
import { cartActions } from '../../store/card-slice'
// import { actions } from '../../store'


const Burger = ({id,img,price,title,weight,description,composition,calories}) => {

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
    <div className='h-[25px] text-center'>
        <h1 className='mt-[50px] text-[40px] h-[25px] text-center font-semibold inline-block'>Бургеры</h1>
    </div>
        {/* bottom section */}


    <div className='flex flex-wrap mt-[50px] gap-5' >
      {
        burgerJson.map( (burgerApi,index) => {
          console.log({burgerApi})
        return (
              <div className="flex" key={index} >
                    <div className='flex gap-x-[10px]' >
                          <div className='w-[300px] h-[411px] rounded-[12px] gap-x-2 bg-white justify-center items-center text-start p-2 '>
                          <img className='rounded-[12px] justify-center w-full h-[220px]' src={burgerApi.img} alt={burgerApi.title} />
                          <h3 className='font-semibold text-2xl font-nunito mt-1'>{burgerApi.price}₽</h3>
                          <h4 className='font-base font-medium font-nunito'>{burgerApi.title}</h4>
                          <p className='font-base font-semibold font-nunito text-grays-300 mt-[40px]'>{burgerApi.weight}г</p>
                          <button onClick={addToCart} className='w-full h-[40px] bg-grays-200 rounded-[12px] mt-[10px] hover:bg-numb-300 hover:text-white'><p className='text-center font-base font-nunito font-medium leading-4 '>Добавить</p></button>
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

export default Burger


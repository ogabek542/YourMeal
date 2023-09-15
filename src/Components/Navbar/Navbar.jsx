import React from 'react'
import "./Navbar.css"
import burger from '../Images/burgerLogo.png'
import headLogo from "../Images/YourMeal (1).png"
import whiteLogo from "../Images/free-icon-kitchen-white.png"
import {NavLink,Link, Outlet} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        {/* Navba top section */}
    <div className='flex flex-col items-center h-[466px] bg-lg bg-bottom bg-no-repeat bg-cover bg-gray-100' >
      {/* header top icons */}
        <div className='flex  w-[153px] h-[33px] mt-4 items-center  justify-center'>  
          <img className='w-[123px] h-[20px] ' src={headLogo} alt="logo" />
          <img className='w-[33px] h-[33px] ' src={whiteLogo}  alt="logo" /> 
        </div>
        {/* burgerlogo image  */}
        <div className=' flex items-center  h-[300px] w-[784px]'>
          <img src={burger} className='w-[326px] h-[326px] border-spacing-3.5' alt="backgroundimage"/>
          <div>
          <h1 className='text-white w-[437px] h-[120px] font-extrabold font-nunito text-5xl mb-[50px]'>Только самые  <span className='text-numb-300'>сочные бургеры!</span> </h1>
          <p className='text-white text-xs font-normal w-[223px]'>Бесплатная доставка от 599₽</p>
          </div>
        </div>
    </div>
         {/* karousel buttons */}
         <nav className='flex w-full ml-auto mr-auto gap-[30px]  pt-[50px] bg-grays-200 justify-center'> 
              <button className='flex items-center bg-white hover:bg-numb-200 hover:text-white rounded-l-full rounded-r-full w-[115px] h-[35px] '>
                <img  className='w-[25px] h-[25px] object-cover hover:bg-numb-200 rounded-full ml-1' src="https://img.freepik.com/premium-vector/delicious-burger-icon-food-beverages_22052-1.jpg" alt="icons" />
                <Link to="burger"><h6 className='pl-2 font-normal'>Бургеры</h6> </Link>  
              </button>
              <button className='flex items-center bg-white w-[100px]  hover:bg-numb-200 hover:text-white rounded-l-full rounded-r-full h-[35px]'>
                <img className='w-[25px] h-[25px] object-cover rounded-full ml-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYuQfbfAFAb-5P7nXCLx8xwkGMb-R7N8Jpg&usqp=CAU" alt="icons" />
                 <Link to="zakuski"> <h6 className='ml-1 font-normal'>Закуски</h6> </Link>
              </button>
              <button className='flex items-center bg-white w-[115px] hover:bg-numb-200 hover:text-white rounded-l-full rounded-r-full'>
                <img className='w-[20px] h-[20px] object-cover rounded-full ml-1' src="https://cdn-icons-png.flaticon.com/512/4803/4803052.png" alt="icons" />
                <Link to="hotdog"> <h6 className='ml-1 font-normal'>Хот-доги</h6> </Link>  
              </button>
              <button className='flex items-center bg-white w-[100px] hover:bg-numb-200 hover:text-white rounded-l-full rounded-r-full'>
                <img className='w-[25px] h-[25px] object-cover rounded-full ml-2' src="https://cdn-icons-png.flaticon.com/512/3069/3069343.png" alt="icons" />
                  <Link to="kombo"><h6 className='ml-1 font-normal'>Комбо</h6> </Link> 
              </button>
              <button className='flex items-center bg-white  w-[100px] hover:bg-numb-200 hover:text-white rounded-l-full rounded-r-full'>
                <img className='w-[20px] h-[20px] object-cover ml-2' src="https://cdn-icons-png.flaticon.com/512/1920/1920525.png" alt="icons" />
                 <Link to="shaurma"> <h6 className='ml-1 font-normal'>Шаурма</h6></Link> 
              </button>
              <button className='flex items-center bg-white w-[110px] hover:bg-numb-200 hover:text-white rounded-l-full rounded-r-full'>
                <img className='w-[20px] h-[20px] object-cover ml-2' src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png" alt="icons" />
                 <Link to="pitsa"> <h6 className='ml-1 font-normal'>Пицца</h6></Link> 
              </button>
              <button className='flex items-center bg-white w-[80px] hover:bg-numb-200 hover:text-white rounded-l-full rounded-r-full'>
                <img className='w-[20px] h-[20px] object-cover ml-2 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1f1eWKpX3kMfsRI6m6_ektC5Y4Z3UXsF3Q&usqp=CAU" alt="icons" />
                 <Link to="vok"><h6 className='ml-1 font-normal'>Вок</h6> </Link> 
              </button>
              <button className='flex items-center bg-white w-[110px] hover:bg-numb-200 hover:text-white rounded-l-full rounded-r-full'>
                <img className='w-[25px] h-[25px] object-cover rounded-full ml-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-RkuSbdYzu-Y8BI-gfZSTJ_1Hf4G4aXbkQ&usqp=CAU" alt="icons" />
                 <Link to="deserts" > <h6 className='ml-1 font-normal'>Десерты</h6></Link>
              </button>
              <button className='flex items-center bg-white w-[90px] hover:bg-numb-200 hover:text-white rounded-l-full rounded-r-full'>
                <img className='w-[20px] h-[20px] object-cover ml-1' src="https://cdn-icons-png.flaticon.com/512/1046/1046790.png" alt="icons" />
                 <Link to="sous"><h6 className='ml-1 font-normal'>Cоусы</h6> </Link>
              </button>
        </nav>
       
    </div>

  )
}

export default Navbar
import React from 'react'
import "./Footer.css"
import OrangeMeal from "../Images/YourMeal.png"
import OrangeIcon from "../Images/free-icon-kitchen-orange.png"
import Call from "../Images/Call.png"
import Wkm from "../Images/Property 1=Default.png"
import Telegram from "../Images/bi_telegram.png"

const Footer = () => {
  return (
    <div className='w-full h-[244px]'>
      {/* footer top side part*/}
      <div className='flex items-center justify-around mt-[100px]  mb-[50px]'>
        {/* left side */}
        <div>
            <div className='flex items-center w-[300px] h-[58px]'>
              <img className='w-[228px] h-[36px] object-cover' src={OrangeMeal} alt="icon" />
              <img className='w-[58px] h-[55px] object-cover' src={OrangeIcon} alt="icon" />
            </div>
            <div className='mt-[80px]'>
              <p className='text-xs font-medium font-nunito text-numb-100 w-[123px] h-[36px]'>
              © YouMeal, 2022
              Design:Softwhere 
              </p>
            </div>
        </div>
       
       {/* rigt side */}
          <div className='flex items-center justify-between'>
            <div className='mr-[100px] -mt-[90px]'>
              <h3 className='font-nunito font-medium text-2xl mt-[-15px] '>Номер для заказа</h3>
              <div className='flex items-center w-[167px] h-[24px]'>
                 <img className='mt-[15px] w-[24px] h-[24px]' src={Call} alt="icon" />
                 <h4 className='mt-[20px]'>+7(930)833-38-11</h4> 
              </div>
            </div>
            <div className='-mt-[90px]'>
              <h3 className='text-2xl font-nunito font-normal'>Мы в соцсетях</h3>
              <div className='flex items-center'>
                <a href="#"> <img className='w-[36px] h-[36px]' src={Wkm} alt="icon" /> </a>
                <a href="https://t.me/Elyorobidov98"> <img className='ml-[15px] w-[36px] h-[36px]' src={Telegram} alt="icon" /> </a>
               
                
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import ShaurmAA from "./shaurma.json"

const Shaurma = () => {
  return (
    <div className='flex  rightBox w-[1000px] bg-grays-200 h-[1000px] flex-wrap z-10'>
              {/* header section */}
              <div className='h-[25px] text-center inline-block'>
                  <h1 className='mt-[50px] text-[40px] h-[25px] text-center font-semibold inline-block'>Шаурма</h1>
              </div>
              {/* bottom  section*/}
              <div className='flex flex-wrap  mt-[70px] gap-5'>
                {
                  ShaurmAA.map( shaurmaApi => {
                    return (
                      <div className="flex" key={shaurmaApi.id}>
                        <div className='flex gap-x-[10px]' >
                              <div className='w-[300px] h-[411px] rounded-[12px] gap-x-2 bg-white justify-center items-center text-start p-2 '>
                              <img  className='rounded-[12px] justify-center w-full h-[220px] cursor-pointer' src={shaurmaApi.img} alt={shaurmaApi.title} />
                              <h3 className='font-semibold text-2xl font-nunito mt-1'>{shaurmaApi.price}₽</h3>
                              <h4 className='font-base font-medium font-nunito'>{shaurmaApi.title}</h4>
                              <p className='font-base font-semibold font-nunito text-grays-300 mt-[40px]'>{shaurmaApi.weight}г</p>
                              <button    className='w-full h-[40px] bg-grays-200 rounded-[12px] mt-[10px] hover:bg-numb-300  hover:text-white'><p className='text-center font-base font-nunito font-medium leading-4 '>Добавить</p></button>
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

export default Shaurma
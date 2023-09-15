import React from 'react'

const Korzinka = () => {
  return (

             <div className="">
                <div className='w-[300px] rounded-[12px] max-h-[550px] h-[450px] ml-auto mr-auto mt-[130px] bg-white p-3'>
                  {/* left side top part */}
                  <div className='flex justify-between  items-center '>
                    {/* all count items section */}
                      <h1 className='text-black text-[24px] '>Корзина</h1>
                      <p className='w-[42px] h-[25px] rounded-[6px] bg-grays-200 text-center font-[12px] items-center'></p>
                  </div>
                  <hr className='mt-2'/>
                  {/* items list section */}
                  <div className='flex justify-between items-center'>
                    {/* left items div */}
                    <div className='flex justify-between items-center'>
                      <div>
                        <img  className='w-[64px] h-[52px] rounded-[8px] my-3' src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80" alt="images" />
                      </div>
                      <div className='flex flex-col ml-2'>
                        <p className='font-medium text-[12px] font-nunito'>Супер сырный</p>
                        <p className='font-medium text-[12px] font-nunito text-grays-300 '>512г</p>
                        <p className='font-medium text-[12px] font-nunito'>550₽</p>
                      </div>
                    </div>
                    {/* right items div  */}
                    <div className='flex w-[84px] h-[40px] rounded-[12px] bg-grays-200 items-center justify-around'>
                      <button  className='text-xs'>-</button>
                      <p className='text-xs'>0</p>
                      <button  className='text-xs'>+</button>
                    </div>
                  </div>
                  <hr />
                  <div className='flex justify-between items-center'>
                    {/* left items div */}
                    <div className='flex justify-between items-center'>
                      <div>
                        <img  className='w-[64px] h-[52px] rounded-[8px] my-3 object-cover' src="https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.jpg?s=2048x2048&w=is&k=20&c=BZiNKDrgDpdXFKimB69ynYx6kZeSQBzrWAomGs05GEg=" alt="images" />
                      </div>
                      <div className='flex flex-col ml-2'>
                        <p className='font-medium text-[12px] font-nunito'>Супер сырный</p>
                        <p className='font-medium text-[12px] font-nunito text-grays-300 '>512г</p>
                        <p className='font-medium text-[12px] font-nunito'>550₽</p>
                      </div>
                    </div>
                    {/* right items div  */}
                    <div className='flex w-[84px] h-[40px] rounded-[12px] bg-grays-200 items-center justify-around'>
                      <p className='text-xs'>-</p>
                      <p className='text-xs'>0</p>
                      <p className='text-xs'>+</p>
                    </div>
                  </div>
                  <hr />
                  <div className='flex justify-between items-center'>
                    {/* left items div */}
                    <div className='flex justify-between items-center'>
                      <div>
                        <img  className='w-[64px] h-[52px] rounded-[8px] my-3' src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80" alt="images" />
                      </div>
                      <div className='flex flex-col ml-2'>
                        <p className='font-medium text-[12px] font-nunito'>Супер сырный</p>
                        <p className='font-medium text-[12px] font-nunito text-grays-300 '>512г</p>
                        <p className='font-medium text-[12px] font-nunito'>550₽</p>
                      </div>
                    </div>
                    {/* right items div  */}
                    <div className='flex w-[84px] h-[40px] rounded-[12px] bg-grays-200 items-center justify-around'>
                      <p className='text-xs'>-</p>
                      <p className='text-xs'>0</p>
                      <p className='text-xs'>+</p>
                    </div>
                  </div>
                  <hr className=''/>
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
  )
}

export default Korzinka
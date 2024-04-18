import React from 'react'
import CardCover from '../util/CardCover'

function SpecialiseCard() {
  return (
    <div className='flex flex-col gap-y-6 justify-between items-center border-[#DCDCDC] border-2 rounded-xl pb-5'>
         <CardCover className="flex justify-between items-center">
        <div className=" w-[92%] m-auto flex justify-between">
          <p className="font-nunito font-semibold text-2xl text-[#313131] ">
          I Specialize In
          </p>
         
        </div>
      </CardCover>
      <div className='flex gap-x-5'>
            <div className='flex flex-col gap-y-2'>
                <div className=' '>

                <img src='/specialise/womenHealth.svg'>
                </img>
                </div>
                <p className='text-center font-nunito font-medium'>Women’s health</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <div className=''>

                <img src='/specialise/skinCare.svg'>
                </img>
                </div>
                <p className='text-center font-nunito font-medium'>Skin Care</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <div className=''>

                <img src='/specialise/immunity.svg'>
                </img>
                </div>
                <p className='text-center font-nunito font-medium'>Immunity</p>
            </div>
            <div className='flex flex-col gap-y-2'>
                <div className=''>

                <img src='/specialise/hairCare.svg'>
                </img>
                </div>
                <p className='text-center font-nunito font-medium'>Hair care</p>
            </div>
      </div>
    </div>
  )
}

export default SpecialiseCard
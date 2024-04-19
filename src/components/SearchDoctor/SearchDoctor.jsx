import React from 'react'
import Select from '../../util/Select'
import location from '../../data/locationOffered'

function SearchDoctor() {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-9 bg-[#EAF2EA] py-14 '>
        <p className=' font-verola font-extrabold text-4xl '>
        Find expert Doctors for an In-clinic session here 
        </p>
        <div className='flex justify-between items-center gap-x-3'>
                <div className='flex items-center '>
                    <div className='bg-white p-3 rounded-tl-xl rounded-bl-xl border-t-[#D4D4D4] border-l-[#D4D4D4] border-b-[#D4D4D4] border-t-[1px] border-l-[1px] border-b-[1px]'>
                        <img src='/icons/location.svg'></img>
                    </div>
                   <Select options={location} className='min-w-[200px] blackArrow bg-white'/>
                </div>
                <div className='flex items-center  '>
                    <input type={'text'}  className='py-3 w-80 px-3 rounded-tl-xl rounded-bl-xl border-t-[#D4D4D4] border-l-[#D4D4D4] border-b-[#D4D4D4] border-t-[1px] border-l-[1px] border-b-[1px] focus:outline-0 outline-none' placeholder='eg. Doctor, specialisation, clinic name' /> 
                    <div className='bg-white p-3 rounded-tr-xl rounded-br-xl border-t-[#D4D4D4] border-r-[#D4D4D4] border-b-[#D4D4D4] border-t-[1px] border-r-[1px] border-b-[1px] '>
                        <img src='icons/rightArrow.svg'></img>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default SearchDoctor
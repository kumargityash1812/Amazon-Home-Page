import React, {useState} from 'react';
import amazon from '../assets/logo.png';
import usa from '../assets/usa.png';
import { BsCart2 } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { TiArrowRepeat} from 'react-icons/ti';
export default function Navbar(){
     const[text, setText] = useState('');
    const handleChange=(e)=>{
      e.preventDefault();
      setText(e.target.value);
    }
    return (
      <div className='bg-[#151922] px-8 py-1 flex items-center justify-between w-full'>
            {/*left*/}
            <div className="h-12 flex m-2">
                <img className='object-cover w-30' src={amazon} alt="ecommerce" />
            </div>
            <div className="hidden sm:hidden md:flex items-center justify-center mr-12 cursor-pointer">
                <HiOutlineLocationMarker className='mr-1' color='whitesmoke' size={20} />
                <div className="flex flex-col align-top pb-2 -mr-10">
                    <h2 className='text-slate-400 text-0.8xl font-bold leading-5 text-left'>Hello</h2>
                    <h2 className='text-white text-1xl font-bold'>Select Your Address</h2>
                </div>

            </div>
            {/*middle*/}
            <div className="hidden sm:flex">
                 <button className='w-[2.5rem] bg-slate-500 text-white px-3 rounded-l-full'><GoSettings size={20} /></button>
          <input onChange={handleChange} value={text} type="sm:w-[5rem] search" placeholder='Search...' className='w-[18rem] p-2 text-left outline-0 transition-all duration-500 focus:w-[30rem] placeholder:w-full text-[#131921]' />
                <button className='w-[2.5rem] bg-orange-400 text-white px-2 rounded-r-full font-bold'><FiSearch size={22} /></button>
          <button className='hidden sm:hidden md:flex items-center justify-center text-center border-2 p-1 ml-4 mr-5 rounded-xl'><img className='w-6' src={usa} alt="usa" /><p className='text-white pl-1 font-medium'>US</p><span className='ml-1 pt-3'><TiArrowRepeat color="white" /></span></button>
            <div className="hidden sm:hidden md:flex flex-col align-top pb-2 ml-5 mr-7 cursor-pointer">
                    <h2 className='text-slate-500 text-0.8xl leading-5 text-left'>Hello,sign in</h2>
                    <h2 className='text-white text-1xl flex items-center justify-center font-medium gap-1'>Account & Lists<MdOutlineArrowDropDown color="white" /></h2>
          </div>
          <div className="hidden sm:hidden md:flex flex-col align-top pb-2 ml-4 mr-4 cursor-pointer">
                    <h2 className='text-slate-300 text-0.8xl leading-5 text-left font-semibold'>Return</h2>
                    <h2 className='text-white text-1xl flex items-center justify-center font-medium gap-1'>& Orders<MdOutlineArrowDropDown color="white" /></h2>
                </div>
          
            </div>
            {/*right*/}
                <div className="mr-4 flex items-center justify-center relative cursor-pointer">
                <div className='hover:bg-orange-500'> <BsCart2  color='white' size={28} /></div>
                <div className="text-[16px] absolute -top-3 left-2  ">
            <p className='text-white bg-orange-600/100 w-5 h-6 text-center rounded-full bg-slate-300'>0</p>
                </div>
                 <h2 className='hidden sm:flex text-white font-bold text-0.8xl leading-5 text-left ml-2'>Cart</h2>
            </div>
      </div>
    )
  }


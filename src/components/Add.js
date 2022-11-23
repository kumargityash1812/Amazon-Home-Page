import React, { Component } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineArrowDropDown } from 'react-icons/md';

export class Add extends Component {
  render() {
    return (
        <div className="w-full bg-[#222f3e] h-10 py-1 px-4 flex items-center justify-between text-white cursor-pointer">
            <div className='flex items-center justify-center font-bold'>
                <GiHamburgerMenu color='white' size={20} />
                <span className='px-2'>All</span>
            </div>
            <div className="font-normal px-2 hover:border-2 hover:hover:bg-slate-600 rounded-full">Best Sellers</div>
            <div className="font-normal px-2 hover:border-2 hover:bg-slate-600 rounded-full">Deals Store</div>
            <div className="font-normal px-2 hover:border-2 hover:bg-slate-600 rounded-full">New Releases</div>
            <div className="hidden sm:hidden md:hidden lg:hidden xl:flex font-normal px-2 hover:border-2 hover:bg-slate-600 rounded-full">Customer Service</div>
            <div className="hidden sm:hidden md:hidden lg:hidden xl:flex font-normal px-2 hover:border-2 hover:bg-slate-600 rounded-full">Prime<span className='pl-1 pt-1'><MdOutlineArrowDropDown size={20} /></span></div>
            <div className="font-normal px-2 hover:border-2 hover:bg-slate-600 rounded-full">Gift Ideas</div>
            <div className="font-normal px-2 hover:border-2 hover:bg-slate-600 rounded-full">Sell</div>
            <div className="font-normal px-2 hover:border-2 hover:bg-slate-600 rounded-full">Books</div>
            <div className="font-normal px-2 hover:border-2 hover:bg-slate-600 rounded-full">Toys & Games</div>
            <div className="font-normal px-2 hover:border-2 hover:bg-slate-600 rounded-full">Coupons</div>
            <div className='hidden sm:hidden md:hidden lg:hidden xl:flex ml-20'><button className='px-4 hover:border-2 hover:bg-slate-600 rounded-full'><span className='text-zinc-500 font-semi-bold text-2xl'>Prime |</span><span className='text-gray-200 text-2xl font-semibold'> Movies and TV Shows</span></button></div>
            </div>
    )
  }
}

export default Add


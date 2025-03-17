import React from 'react'
import Logo from '../assets/olxLogo.png'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center  border-b-gray-400 '>
<ul className='flex items-center p-4 gap-10'>
   <img src={Logo} alt="" />
    <li className='hover:bg-gray-200 p-2 rounded duration-200 cursor-pointer hover:text-gray-800'>Mobiles</li>
    <li className='hover:bg-gray-200 p-2 rounded duration-200 cursor-pointer hover:text-gray-800'>Motors</li>
    <li className='hover:bg-gray-200 p-2 rounded duration-200 cursor-pointer hover:text-gray-800'>Properties</li>
    <li className='hover:bg-gray-200 p-2 rounded duration-200 cursor-pointer hover:text-gray-800'>Laptops</li>
</ul>
<input type="text" className='border border-gray-300 h-10 w-99 rounded focus:outline-gray-300 p-2 text-gray-600 '/>
<button className="button">
 Search
</button>

    </nav>
    
    
    </>
  )
}

export default Navbar
import React, { useState } from 'react';
import LinkNav from './LinkNav';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

const navigateData=[
  { "id": 1, "name": "Home", "path": "/" },
  { "id": 2, "name": "About", "path": "/about" },
  { "id": 3, "name": "Services", "path": "/services" },
  { "id": 4, "name": "Contact", "path": "/contact" },
  { "id": 5, "name": "Blog", "path": "/blog" },
  { "id": 6, "name": "Careers", "path": "/careers" },
  { "id": 7, "name": "Support", "path": "/support" },

  ];
  

const Navbar = () => {

const [open ,setOpen] =useState(false);

const links =  navigateData.map(route => <LinkNav key={route.id} route={route}>
</LinkNav>)

return (

  <nav className='flex items-center justify-between mx-10  mt-4'>
  <span className='flex'onClick={()=>setOpen(!open)}>
{ open? 
    <X className='md:hidden'></X>: 
    <Menu className='md:hidden'></Menu>}

   
  <ul className={`
     md:hidden
     duration-700
     absolute 
     bg-amber-400 
    // ${open?'top-7':'-top-50'}`}>
    {links}
  </ul>

  <h1 className='text-xl '>NavbarLogo</h1>

  </span>
  <ul className='md:flex hidden'>
   {
    links
   }
   </ul>
   {/* form stop wrap use whitespace-nowrap or flex-shrink-0 */}
   <span className='whitespace-nowrap '>Sign In</span>






            {/* 
            <ul className='flex'> 
            {
             navigateData.map(route => <li className='mr-10'>
            <a href={route.path}>{route.name}</a>      
            </li>)
             }
            </ul> */}
             {/* <ul className='flex'>
                 <li className='mr-10'><a href="/">Home</a></li>
                 <li className='mr-10'><a href="/">How Works</a></li>
                 <li className='mr-10'><a href="/">Blog</a></li>
                 <li className='mr-10'><a href="/">About</a></li>
            </ul> */}
        </nav>
    );
};

export default Navbar;
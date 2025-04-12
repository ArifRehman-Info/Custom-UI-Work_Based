import React from 'react';
import LinkNav from './LinkNav';

const navigateData=[
    { "id": 1, "name": "Home", "path": "/" },
    { "id": 2, "name": "About", "path": "/about" },
    { "id": 3, "name": "Services", "path": "/services" },
    { "id": 4, "name": "Contact", "path": "/contact" }
  ];
  

const Navbar = () => {
    return (
        <nav>
            <ul className='flex justify-center'>
            {
                navigateData.map(route => 
                <LinkNav key={route.id} 
                route={route}
                
                ></LinkNav>)
            }
            </ul>

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
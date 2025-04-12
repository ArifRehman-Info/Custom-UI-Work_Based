import React from 'react';

const LinkNav = ({route}) => {
    return (
        <li className='mr-10 mx-4 lg:mr-10  hover:bg-amber-200  '>
        <a href={route.path}>{route.name}</a>
        </li> 
    );
};

export default LinkNav;
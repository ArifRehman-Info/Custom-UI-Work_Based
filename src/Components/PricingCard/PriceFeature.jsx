import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PriceFeature = ({feature}) => {

    return (
     <p className='flex m-2 items-center'><CircleCheckBig className='m-2
     '></CircleCheckBig>{feature}</p>
    );
};

export default PriceFeature;
import React from 'react';
import PriceFeature from './PriceFeature';

const PricingCard = ({prices}) => {

    const {name ,price,description,features}=prices;

  
    return (
        <div className='flex flex-col border bg-[#9c8282] rounded p-4'>
            {/* card head  */}
            <div>
                <h1 className='text-2xl'>{name}</h1>
                <h3 className='text-xl'>${price}/month</h3>
            </div>
            {/* card body */}
            <div className='flex-1 bg-[#6e5e5a] p-4 rounded-xl mt-6'>
              <p>{description}</p>
              {
                features.map((feature ,index) => < PriceFeature 
                     key={index}
                     feature={feature}></PriceFeature> )
              }
            </div>
            <button className="btn w-full mt-2 rounded ">Subscribe Now</button>
        </div>
    );
};

export default PricingCard;
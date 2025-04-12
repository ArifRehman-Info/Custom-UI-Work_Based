import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';


const PricingPlan = ({ pricingPromise }) => {

    const priceData = use(pricingPromise);

    return (
        <div>

            <h1 className='text-2xl'>Get Our Membership</h1>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-8 px-10'>
                {
                priceData.map(prices=> <PricingCard 
                    key={prices.id}
                    prices={prices} ></PricingCard>)
                
                }
            </div>
        </div>
    );
};

export default PricingPlan;
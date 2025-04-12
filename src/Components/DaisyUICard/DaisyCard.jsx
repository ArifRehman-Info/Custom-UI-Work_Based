
import Featurer from './Featurer';

const DaisyCard = ({priceplan}) => {
 const {name,features,price ,popular} = priceplan;

    return (
        <div id='font-card'>
  <div className="card w-96 bg-base-100 shadow-sm ">
  <div className="card-body">
    {popular && <span className="badge badge-xs badge-warning">Most Popular</span>}
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{name}</h2>
      <span className="text-xl">${price}/mo</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
    {
     features.map((feature,index) => <Featurer key={index} feature={feature}></Featurer>)
     }
    
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DaisyCard;
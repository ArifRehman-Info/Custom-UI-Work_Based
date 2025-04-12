
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyUINav/DaisyNav'
import Navbar from './Components/NavBar/Navbar'
import PricingPlan from './Components/PricingPlan/PricingPlan'

const pricingPromise =fetch('price-plan.json').then(res => res.json());

 
function App() {


  return (
    <>
    <header>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
    </header>
    <main>
      <Suspense fallback ={<span className="loading loading-spinner text-success"></span>}>
        <PricingPlan pricingPromise ={pricingPromise}></PricingPlan>
      </Suspense>
    </main>


   </>
  )
}

export default App


import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyUINav/DaisyNav'
import Navbar from './Components/NavBar/Navbar'
import PricingPlan from './Components/PricingPlan/PricingPlan'
import Chart from './Components/ReChart/Chart'
import axios from 'axios'
import AxiosMarkChart from './Components/Axios.MarkChartVersion/AxiosMarkChart'

const pricingPromise =fetch('price-plan.json').then(res => res.json());

 const markPromise = axios.get('axios.json')

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
      <Chart></Chart>
      <Suspense fallback ={<span className="loading loading-spinner text-success"></span>}>
       <AxiosMarkChart  markPromise={markPromise}></AxiosMarkChart>
      </Suspense>
    </main>


   </>
  )
}

export default App

import React from 'react'
import {GiPlayerTime} from "react-icons/gi"
import {BsFilter} from "react-icons/bs"
import {FiChevronDown} from "react-icons/fi"
import TopBrands from '../Delivery/TopBrands/TopBrands'
import DeliveryCollection from '../Delivery/DeliveryCollection/DeliveryCollection'
import Fillter from '../Comman/Fillters/Fillter'
import ExploreItems from '../Delivery/ExploreAllItems/ExploreItems'
import { deleviryhomeData } from '../Delivery/deleveryData'


const Nightlife = () => {

  var deliveryfillterTab = [
    {
      id : 1,
      icon:<BsFilter  className='absolute-center'/>,
      fillterName :"Filters"
    },
    {
      id : 2,
      icon:<GiPlayerTime className='absolute-center'/>,
      fillterName :"Delivery Time"
    },
    {
      id : 3,
      icon:"",
      fillterName :"Rating 4.0+"
    },
    {
      id : 4,
      icon:"",
      fillterName :"Pure Veg"
    },
    {
      id : 5,
      icon:<FiChevronDown className='absolute-center'/>,
      fillterName :"Cuisines"
    },
    {
      id : 6,
      icon:<FiChevronDown className='absolute-center'/>,
      fillterName :"More filters"
    }
  ]
  return (
    <div>
      <div className='max-width'>
        <Fillter fillterTabList={deliveryfillterTab} />
      </div>
      <DeliveryCollection />
      <TopBrands />
     <ExploreItems recepisData={deleviryhomeData} collectionItem="Delivery Restaurants in Indore"/>
    </div>
  )
}
export default Nightlife

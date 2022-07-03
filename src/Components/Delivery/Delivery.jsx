import React from 'react'
import Fillter from '../Comman/Fillters/Fillter'
import {GiPlayerTime} from "react-icons/gi"
import {BsFilter} from "react-icons/bs"
import {FiChevronDown} from "react-icons/fi"
import DeliveryCollection from './DeliveryCollection/DeliveryCollection'
import TopBrands from './TopBrands/TopBrands'
import ExploreItems from './ExploreAllItems/ExploreItems'
import { deleviryhomeData } from './deleveryData'

const Delivery = () => {

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

export default Delivery

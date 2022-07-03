import React from 'react'
import ExploreCard from './ExploreCard/ExploreCard'
import "./exploreItem.css"
const ExploreItems = ({collectionItem,recepisData}) => {
  console.log(recepisData,"data")
  return (
      <div className='max-width explore-wraper'>
        <div className='collection-title'>{collectionItem}</div>
        <div className="explore-grid">
          {recepisData.map((item)=>{
            return <ExploreCard item={item}/>
          })}
        </div>
      </div>
  )
}

export default ExploreItems

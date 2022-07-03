import React from 'react'
import "./ExploreCard.css"
import {IoMdStarOutline} from "react-icons/io"

const ExploreCard = ({item}) => {
  return (
    <div className='explore-card'>
        <div className='explore-card-image-cover'>
            <img src={item.deleveryImage} alt={item.deleveryDishName} className="explore-card-image"/>
            {item.deleveryDiscount && <div className="discount absolute-center">{item.deleveryDiscount}</div>}
        </div>
        <div className='res-row'>
                <div className='res-name'>{item.deleveryDishName}</div>
                {
                    item.deleveryRating && (
                        <div className="res-rating absolute-center">
                            {item.deleveryRating} <IoMdStarOutline className='absolute-center star-icon' />
                        </div>
                    )
                }
        </div>
        <div className="res-row">
            <div className='res-dish-type'>{item.deleveryDishType}</div>
            <div className='res-dish-price'>{item.deleveryPrice}</div>
        </div>
    </div>
  )
}

export default ExploreCard

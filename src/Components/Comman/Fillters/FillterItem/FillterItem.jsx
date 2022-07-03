import React from 'react'
import "./FillterItem.css"

const FillterItem = ({filter}) => {
  return (
    <div className='filterItem'>
      {filter.icon&& filter.icon }
      <div className='filterName'>{filter.fillterName}</div>
    </div>
  )
}

export default FillterItem

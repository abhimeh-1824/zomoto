import React from 'react'
import FillterItem from './FillterItem/FillterItem'
import "./fillter.css"
const Fillter = ({fillterTabList}) => {
  return (
    <div className='filters'>
        {fillterTabList&&fillterTabList.map((filter)=>{
            return <FillterItem filter={filter} key={filter.id}/>
        })}
    </div>
  )
}

export default Fillter

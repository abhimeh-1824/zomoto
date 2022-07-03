import React from 'react'
import NextArrow from '../../Comman/carousel/NextArrow';
import PrevArrow from '../../Comman/carousel/PrevArrow';
import Slider from "react-slick"
import "./TopBrands.css"
const TopBrands = () => {
    const topDeliveryItem = [
            {
                id:1,
                time:"28 min",
                cover:"https://b.zmtcdn.com/data/pictures/6/20184126/5e438fbaa1ef69fc56d79b35b079e339_o2_featured_v2.jpg"
            },{
                id:2,
                time:"31 min",
                cover:"https://b.zmtcdn.com/data/pictures/5/19339295/839ccbf92394a1ae2e6715c02860bdc9_o2_featured_v2.jpg"
            },{
                id:3,
                time:"20 min",
                cover:"https://b.zmtcdn.com/data/pictures/0/1402530/33dc8fca225594f0fbfb8fbfba344c98_o2_featured_v2.jpg"
            },{
                id:4,
                time:"15 min",
                cover:"https://b.zmtcdn.com/data/pictures/5/19339295/839ccbf92394a1ae2e6715c02860bdc9_o2_featured_v2.jpg"
            },{
                id:5,
                time:"34 min",
                cover:"https://b.zmtcdn.com/data/pictures/1/1402601/4e89e089cbc216edc22f6fa95b04c1c6_o2_featured_v2.jpg"
            },{
                id:6,
                time:"33 min",
                cover:"https://b.zmtcdn.com/data/pictures/6/19007576/29192ab21e1950134d278c5f8216604f_o2_featured_v2.jpg"
            },{
                id:7,
                time:"35min",
                cover:"https://b.zmtcdn.com/data/pictures/4/19899344/51b5d2eda951da0e1e258850f46d8eae_o2_featured_v2.jpg"
            },{
                id:8,
                time:"36min",
                cover:"https://b.zmtcdn.com/data/pictures/0/20295830/a5202435fd06ee7d89117fa8c3bde060_o2_featured_v2.jpg"
            },{
                id:9,
                time:"35 min",
                cover:"https://b.zmtcdn.com/data/pictures/9/19865499/142748f36ecccbf235c324ed7cf4743b_o2_featured_v2.jpg"
            },{
                id:10,
                time:"30 min",
                cover:"https://b.zmtcdn.com/data/pictures/1/1402781/5e10c5115a8d46c2fd158c2708bf1db7_o2_featured_v2.jpg"
            },{
                id:11,
                time:"28 min",
                cover:"https://b.zmtcdn.com/data/pictures/7/20009867/6cb71d7182c597d415da355b41d6ce21_o2_featured_v2.jpg"
            }
]
    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

  return (
    <div className="top-brands-wrap max-width"> 
        <div className='collection-title'>This is TopBrands</div>
        <Slider {...settings}>
            {topDeliveryItem.map((item)=>{
                    return <div key={item.id}>
                        <div className="top-brands-cover">
                            <img src={item.cover} alt={item.time} className="top-brands-image" />
                            <span className='top-brands-time'>{item.time}</span>
                        </div>
                    </div>
            })}
        </Slider>
    </div>
  )
}

export default TopBrands

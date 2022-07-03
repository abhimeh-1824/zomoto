import React from "react";
import NextArrow from "../../Comman/carousel/NextArrow";
import PrevArrow from "../../Comman/carousel/PrevArrow";
import Slider from "react-slick"
import "./DeliveryCollection.css";
import DeliveryCollectionItem from "./DeliveryCollectionItem/DeliveryCollectionItem";
const DeliveryCollection = () => {
    const deliveryItem = [
        {
            id:1,
            title:"Pizza",
            cover:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
        },
        {
            id:2,
            title:"Sandwich",
            cover:"https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png"
        },
        {
            id:3,
            title:"Chaat",
            cover:"https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png"
        },
        {
            id:4,
            title:"Samosa",
            cover:"https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png"
        },
        {
            id:5,
            title:"Home Style",
            cover:"https://b.zmtcdn.com/data/dish_images/da37534e55d5f1450ea9771c0627a8d81641644205.png"
        },
        {
            id:6,
            cover:"https://b.zmtcdn.com/data/dish_photos/e8b/1385411f4c63c4463344647a742bee8b.jpg",
            title:"Cookies"
        },
        {
            id:7,
            cover:"https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png",
            title:"Kachori"
        }
        ,{
            id:8,
            cover:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
            title:"Rolls"
        },
        {
            id:9,
            title:"Momos",
            cover:"https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png"
        },
        {
            id:10,
            cover:"https://b.zmtcdn.com/data/dish_images/8187d3223ac2cc42cc24f723c92877511634805403.png",
            title:"Shake"
        }
    ]
    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

  return (
    <div className="delivery-collection-wraper">
      <div className="max-width">
        <div className="delivery-title collection-title">Eat what makes you happy</div>
        <Slider {...settings}>
            {deliveryItem.map((item)=>{
                    return < DeliveryCollectionItem item={item} key={item.id}/>
            })}
        </Slider>
      </div>

    </div>
  );
};

export default DeliveryCollection;

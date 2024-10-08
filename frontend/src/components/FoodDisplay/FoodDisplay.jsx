import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({catergory}) => {

  const {food_list, url} = useContext(StoreContext);
  return (
  
    <div className = 'food-display' id = 'food-display'>
        <h2>Top dishes near you</h2>
        <div className = "food-display-list">
          {food_list.map((item, index) => {
            if(catergory == "All" || item.catergory == catergory)
              return (
                <div key = {index}>
                    <FoodItem id = {item._id} name = {item.name} price = {item.price} description = {item.description} image = {item.image}/>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default FoodDisplay

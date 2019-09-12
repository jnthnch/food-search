import React from 'react';

const FoodItem = (props) => {
  return (
    <div className='food-item-box'>
      <div>
        name: {props.item.name}
      </div>
      <div>
        brand: {props.item.brand}
      </div>
      <div>
        calories: {props.item.calories}
      </div>
      <div>
        portion: {props.item.portion}
      </div>
    </div>
  )

}

export default FoodItem;
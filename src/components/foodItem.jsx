import React from 'react';

const FoodItem = (props) => {
  let foodColorCode = {

  }

  let calories = props.item.calories;
  let grams = props.item.portion;
  let foodDensity = calories / grams;

  function FindColorCode() {

  }

  return (
    <div className='food-item-box'>
      <table>
        <tbody>
          <tr>
            <td className="item-property">
              name:
            </td>
            <td className="item-value">
              {props.item.name}
            </td>
          </tr>
          <tr>
            <td className="item-property">
              brand:
            </td>
            <td className="item-value">
              {props.item.brand}
            </td>
          </tr>
          <tr>
            <td className="item-property">
              calories:
            </td>
            <td className="item-value">
              {props.item.calories}
            </td>
          </tr>
          <tr>
            <td className="item-property last-row">
              portion:
            </td>
            <td className="item-value last-row">
              {props.item.portion}
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  )

}

export default FoodItem;
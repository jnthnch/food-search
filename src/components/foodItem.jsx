import React from 'react';

const FoodItem = (props) => {

  let calories = props.item.calories;
  let grams = props.item.portion;
  let colorCode = findColorCode(calories, grams);

  function findColorCode(calories, grams) {
    let foodDensity = calories / grams;
    if (foodDensity <= 1.0) {
      return '#16AA00'
    } else if (foodDensity >= 2.4) {
      return '#F75462'
    } else {
      return '#FFCF04'
    }
  }

  let nameStyling = {
    color: colorCode,
    fontWeight: 'bold',
  }

  return (
    <div className='food-item-box'>
      <table>
        <tbody>
          <tr>
            <td className="item-property">
              name:
            </td>
            <td className="item-value" style={nameStyling}>
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
              {props.item.calories} Cal
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
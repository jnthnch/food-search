import React from 'react';
import './App.css';
import FoodItem from './components/foodItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
    this.state = {
      searchQuery: '',
      foods: []
    };

    this.handleChangeDelayed = this.handleChangeDelayed.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let query = this.state.searchQuery
    fetch(`https://uih0b7slze.execute-api.us-east-1.amazonaws.com/dev/search?kv=${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ foods: data })
      });
  }

  performSearch() {
    let query = this.state.searchQuery;
    if (query.length > 2) {
      fetch(`https://uih0b7slze.execute-api.us-east-1.amazonaws.com/dev/search?kv=${query}`)
        .then(res => res.json())
        .then(data => {
          this.setState({ foods: data })
        });
    }
  }

  handleChangeDelayed(event) {
    let searchText = event.target.value;
    this.setState({
      searchQuery: searchText
    })
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.performSearch();
    }, 1000)
  }


  // renderList(foods) {
  //   var list = [];
  //   foods.forEach(v => {
  //     list.push(
  //       <div style={{ marginBottom: "40px", display: "flex", flexDirection: "column" }}>
  //         <div>
  //           name: {v.name}
  //         </div>
  //         <div>
  //           brand: {v.brand}
  //         </div>
  //         <div>
  //           calories: {v.calories}
  //         </div>
  //         <div>
  //           portion: {v.portion}
  //         </div>
  //       </div>
  //     )
  //   });
  //   return (
  //     <div>
  //       <h3>Result:</h3>
  //       {list}
  //     </div>
  //   )
  // }

  render() {
    let foodItems = this.state.foods.map((item) => {
      return <FoodItem item={item}></FoodItem>
    })

    return (
      <div className="App">
        <div className="header">
          <div className="header-search-content">
            <text className="Noom-Food-Explorer-Text">Noom Food Explorer</text>
            <text className="search-text">Enter the key word:</text>
            <form className="search-box" onSubmit={this.handleSubmit}>
              <input className="input-box" type="text" value={this.state.value} onKeyUp={this.handleChangeDelayed} />
              <button className="search-button" type="submit">Search</button>
            </form>
          </div>
        </div>
        {foodItems}
      </div>
    );
  }
}

export default App;

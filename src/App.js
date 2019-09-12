import React from 'react';
import './App.css';

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
    fetch(`https://uih0b7slze.execute-api.us-east-1.amazonaws.com/dev/search?kv=${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ foods: data })
      });
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


  renderList(foods) {
    var list = [];
    foods.forEach(v => {
      list.push(
        <div style={{ marginBottom: "40px", display: "flex", flexDirection: "column" }}>
          <div>
            name: {v.name}
          </div>
          <div>
            brand: {v.brand}
          </div>
          <div>
            calories: {v.calories}
          </div>
          <div>
            portion: {v.portion}
          </div>
        </div>
      )
    });
    return (
      <div>
        <h3>Result:</h3>
        {list}
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <h1>Noom Food Explorer</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter the key word:
          <input type="text" value={this.state.value} onKeyUp={this.handleChangeDelayed} />
          </label>
          <button type="submit">Search</button>
        </form>
        {this.renderList(this.state.foods)}
      </div>
    );
  }
}

export default App;

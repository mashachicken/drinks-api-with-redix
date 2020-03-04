import React, { Component } from 'react';

class DrinksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drink: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })

  }


//   onSubmit(e) {
//     e.preventDefault()
//     const search = {
//       drink: this.state.drink
//     }
//     let name = this.state.drink
//     fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name )
//     .then(res => res.json(),
//     error => alert('srry', error)
//   ).then(function(json){
//
//       if (json.drinks.length > 0) {
//              const drinkName = json.drinks[0].strDrink;
//            }else {
//              alert('We couldnt find a drink with this name')
//            }
//   })
// }
  render() {

    return (

      <div>
      <h1> DRINKZZ </h1>
      <h1> {drinkName}
      <form onSubmit={this.onSubmit}>
      <div>
      <input type="search" name='drink' onChange={this.onChange} placeholder="Search by name" value={this.state.drinks} />
      </div>
      <br/>
      <button type="submit"> Search </button>
      </form>
      </div>

)
}
}

export default DrinksForm

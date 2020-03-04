import React, { Component } from 'react';

class Drinks extends Component {
 constructor(props) {
   super(props);
   this.state = {
   drinks: []
}
}

 componentDidMount() {
   fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
   .then(res => res.json())
   .then(data => this.setState({  drinks: data.drinks  }));
 }

 render() {
   const drinkItems = this.state.drinks &&  this.state.drinks.map(drink => (
     <div key={drink.idDrink}>
     <h3>{drink.strDrink} </h3>
     </div>
   ));
   return (
     <div>
     <h1> Drinks </h1>
     {drinkItems}
     </div>

   )
 }
}
export default Drinks

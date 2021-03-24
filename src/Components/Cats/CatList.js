import React, { Component } from 'react';

class CatList extends Component {
  render() {
  const CatBreedList = () => 
  this.props.breeds.map((cat) => <li>{cat}</li> );
    
  return (
    <div>
      <h2>Cat Breeds</h2>
        <ul>{CatBreedList()}</ul>
    </div>
 )
}
}

 
export default CatList;



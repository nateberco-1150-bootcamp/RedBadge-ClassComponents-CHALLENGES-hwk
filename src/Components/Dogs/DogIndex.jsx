import React, { Component } from 'react';

class DogIndex extends Component {

    constructor(props) {
      super(props);
      this.state = { dogImage: "" };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.fetchImage();
    }
  

    fetchImage() {

      const url = "https://dog.ceo/api/breeds/image/random";
  
      fetch(url)
        .then((res) => res.json())
        .then((json) => this.setState({ dogImage: json.message }));
    }
  
  
    componentDidMount() {
      this.fetchImage();
    }
  
    // componentDidUpdate(prevProps, prevState) {
      
    //   if (prevState.dogImage !== this.state.dogImage) {
    //     this.fetchImage();
    //   }
    // }
    render() {
      return (
      <div>
        <img src={this.state.dogImage} alt=""/>
      <button onClick={this.handleClick}>Next Pup!</button>
      </div>
      )
  }
}
  

  export default DogIndex;




  

import React, { Component } from "react";
import { Input } from "reactstrap";


class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
      searchTerm: "",
    };
  }
  editSearchTerm = (e) => {
    let search = this.state.searchTerm;
    this.setState({ searchTerm: e.target.value });
    console.log(search);
  };
  render() {
    return (
      <div>
        <form>
          <Input
            type="text"
            placeholder="Search Here"
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
          />
          <button type="submit"> Search</button>
          <h3>Results:</h3>
        </form>
        <ul>
          {this.state.things
            .filter((thing) => thing.includes(this.state.searchTerm))
            .map((thing) => (
              <li>{thing}</li>
            ))}
        </ul>
      </div>
    );
  }
}
export default SearchIndex;
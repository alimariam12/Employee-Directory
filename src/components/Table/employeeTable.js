import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const sortTable = {
  up: {
    class: "sort-up",
    fn: (a, b) => a.name - b.name,
  },
  down: {
    class: "sort-down",
    fn: (a, b) => b.name - a.name,
  },
  default: {
    class: "sort",
    fn: (a, b) => a,
  },
};
class Table extends Component {
  state = {
    //state is by default an object
    employees: [],
    users: "",
    search: "",
    currentSort: "default",
  };

  componentDidMount() {
    API.getRandomUser().then((res) => {
      console.log(res);
      this.setState({ employees: res.data.results });
    });
  }

  renderTableData() {
    return this.state.employees.map((each, index) => {
      return (
        <tr>
          {/* <td>{each.results.image}</td> */}
          <img src={each.picture.thumbnail} alt={"Employee Profile Pics"} />
          <td>
            {each.name.title + " " + each.name.first + " " + each.name.last}
          </td>
          <td>{each.phone}</td>
          <td>{each.email}</td>
          <td>{each.dob.age}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = ["image", "name", "phone", "email", "age"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  onSortChange = () => {
    const { currentSort } = this.state;
    let nextSort;

    if (currentSort === "down") nextSort = "up";
    else if (currentSort === "up") nextSort = "default";
    else if (currentSort === "default") nextSort = "down";

    this.setState({
      currentSort: nextSort,
    });
  };
  render() {
    const { currentSort } = this.state;
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <table id="employees">
          <tbody>
            <tr>
              {this.renderTableHeader()}
              <button onClick={e => this.onSortChange(e, this.renderTableData[1])}>
                <i className={`fas fa-${sortTable[currentSort].class}`} />
              </button>
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

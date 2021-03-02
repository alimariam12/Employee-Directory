import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Table extends Component {
  state = {
    //state is by default an object
    employees: [],
    users: "",
    search: "",
  };

  componentDidMount() {
    API.getRandomUser()
      .then((res) => this.setState({ users: res.data }))
      .catch((err) => console.log(err));
      console.log("helloooo", API.getRandomUser());
  }

  renderTableData() {
    return this.state.employees.map((each, index) => {
      return (
        <tr>
          <td>{each.results.image}</td>
          <td>{each.results.name}</td>
          <td>{each.results.phone}</td>
          <td>{each.results.email}</td>
          <td>{each.results.location}</td>
        </tr>
      );
    });
  }
  renderTableHeader() {
    let header = ["image", "name", "phone", "email", "location"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <h1 id="title">Employee Directory</h1>
        <table id="employees">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

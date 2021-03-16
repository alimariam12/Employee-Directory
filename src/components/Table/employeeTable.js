import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";



class Table extends Component {
  state = {

    employees: [],
    users: "",
    search: "",
    currentSort: "default",
  };


  sortBy = () => {
    let sortedEmployee = this.state.employees.sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.setState({ sortedEmployee });
  };
  sortById = () => {
    let sortedEmployeeId = this.state.employees.sort((a, b) =>
      a.id > b.id ? 1 : -1
    );
    this.setState({ sortedEmployeeId });
  };


  componentDidMount() {
    API.getRandomUser().then((res) => {
      console.log(res);
      this.setState({ employees: res.data.results });
    });
  }

  renderTableData() {
    return this.state.employees.sort(this.sortUser).map((each, index) => {
      return (
        <tr>
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

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <table id="employees">
          <tbody>
            <tr>
              {this.renderTableHeader()}
            </tr>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

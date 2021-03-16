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

 
  sortByName = () => {
    let sortedEmployee = this.state.employees.sort((a, b) =>
      a.name.first > b.name.first ? 1 : -1
    );
    this.setState({ sortedEmployee });
  };
  sortById = () => {
    let sortedEmployeeId = this.state.employees.sort((a, b) =>
      a.id.value > b.id.value ? 1 : -1
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
          <td>{each.id.value}</td>
          <img src={each.picture.thumbnail} alt={"Employee Profile Pics"} />
          <td>{each.name.first}</td>
          <td>{each.name.last}</td>
          <td>{each.phone}</td>
          <td>{each.email}</td>
          <td>{each.dob.age}</td>
        </tr>
      );
    });
    
  }

  renderTableHeader() {
    let header = [ "id","image", "First Name", "Last Name", "phone", "email", "age"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
    //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (

      <>
      <div>
      <button onClick={e => this.sortByName(e, this.renderTableData[3])}>Sort by Name</button>

      <button onClick={e => this.sortById(e, this.renderTableData[1])}>Sort by Id</button>

      </div>
      <div>
        <table id="employees">
          <thead>
          <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
      </>
    );
  }
}

export default Table;

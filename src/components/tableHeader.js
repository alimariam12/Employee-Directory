import React from "react";
import MovieContext from "../utils/movieContext";

function EmployeeDetail() {
  renderHeader = () => {
    let headerElement = ["image", "name", "email", "phone", "location"];

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  // return (
  //   // Use consumer to capture and destucture the state values
  //   <MovieContext.Consumer>
  //     {({result: {Title, Poster, Director, Genre, Released}}) => (
  //       <div className="text-center">
  //         <img alt={Title} className="img-fluid" src={Poster} style={{ margin: "0 auto" }} />
  //         <h3>Director(s): {Director}</h3>
  //         <h3>Genre: {Genre}</h3>
  //         <h3>Released: {Released}</h3>
  //       </div>
  //     )}
  //   </MovieContext.Consumer>
  // );
}

export default EmployeeDetail;

import React from "react";
import EmployeeTable from "./components/Table/employeeTable";
import Footer from "./components/Footer/index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
<EmployeeTable />
      <Footer />
    </div>
  );
}

export default App;

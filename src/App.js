import React from "react";
import Table from "./Table";

import "./styles.css";

export default function App() {
  const data = React.useMemo(
    () => [
      {
        color: "red",
        value: "#f00",
        name: "Abdullah"
      },
      {
        color: "green",
        value: "#0f0",
        name: "Hamza"
      },
      {
        color: "blue",
        value: "#00f",
        name: "Ali"
      },
      {
        color: "cyan",
        value: "#0ff",
        name: "Saad"
      },
      {
        color: "magenta",
        value: "#f0f",
        name: "Yousaf"
      },
      {
        color: "yellow",
        value: "#ff0",
        name: "Ibrahim"
      },
      {
        color: "black",
        value: "#000",
        name: "Ahmed"
      }
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name"
      },
      {
        Header: "Color",
        accessor: "color"
      },
      {
        Header: "Value",
        accessor: "value"
      }
    ],
    []
  );

  return (
    <>
      <div className="App">
        <h1>Table</h1>
        <h2>Table with sorting and search</h2>
      </div>
      <div>
        <h4>This is sample data</h4>
      </div>

      <div style={{ marginTop: "5px" }}>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}

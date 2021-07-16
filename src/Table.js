import React from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  useAsyncDebounce
} from "react-table";
import SearchInput from "./SearchInput";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  const handleFilterChange = useAsyncDebounce((e) => {
    const value = e.target.value || undefined;
    setGlobalFilter(value);
  }, 200);
  const nameFilter = (e) => {
    const value = e.target.value || undefined;
    setFilter("name", value);
  };
  const colorFilter = (e) => {
    const value = e.target.value || undefined;
    setFilter("color", value);
  };
  const valueFilter = (e) => {
    const value = e.target.value || undefined;
    setFilter("value", value);
  };

  return (
    <>
      <div style={{ marginBottom: "10" }}>
        <label style={{ fontWeight: "bold" }}>Search: </label>
        <SearchInput
          placeholder={"Search"}
          filterFunction={handleFilterChange}
        />
      </div>

      <table {...getTableProps()} style={{ border: "solid 1px blue" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    background: "aliceblue",
                    color: "black",
                    fontWeight: "bold"
                  }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? " ↓" : " ↑") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}

          <tr>
            {columns.map((col) => (
              <th>
                {col.accessor === "name" ? (
                  <SearchInput
                    placeholder={"Search Name"}
                    filterFunction={nameFilter}
                  />
                ) : col.accessor === "color" ? (
                  <SearchInput
                    placeholder={"Search Color"}
                    filterFunction={colorFilter}
                  />
                ) : (
                  <SearchInput
                    placeholder={"Search Value"}
                    filterFunction={valueFilter}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "papayawhip"
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Table;

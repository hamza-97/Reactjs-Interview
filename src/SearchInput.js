import React from "react";

function SearchInput({ placeholder, filterFunction }) {
  const [search, setSearch] = React.useState("");
  return (
    <>
      <div>
        <input
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            filterFunction(e);
          }}
          placeholder={placeholder}
        />
      </div>
    </>
  );
}
export default SearchInput;

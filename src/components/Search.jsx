import React, { useState } from "react";
import { debounce } from "lodash";
import { Input } from "antd";

export default function Search({ loadData }) {
  const [searchValue, setsearchValue] = useState("");
  const handleSearchValue = (event) => {
    setsearchValue(event.target.value);
  };
  const deb = debounce(loadData, 1000);
  return (
    <Input
      className="Search"
      placeholder="Type to search..."
      value={searchValue}
      onChange={(event) => {
        handleSearchValue(event);
        deb(event.target.value);
      }}
    />
  );
}

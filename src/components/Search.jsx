import React, { useState } from "react";
import { debounce } from "lodash";
import { Input } from "antd";

export default function Search({ loadData, disabled }) {
  const [searchValue, setsearchValue] = useState("");
  const handleSearchValue = (event) => {
    setsearchValue(event.target.value);
  };
  const deb = debounce(loadData, 400);
  return (
    <Input
      className="Search"
      placeholder="Type to search..."
      disabled={disabled}
      value={searchValue}
      onChange={(event) => {
        handleSearchValue(event);
        deb(event.target.value);
      }}
    />
  );
}

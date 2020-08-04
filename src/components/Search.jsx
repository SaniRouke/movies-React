import React, { useState, useRef, useEffect } from "react";
import { debounce } from "lodash";
import { Input } from "antd";

export default function Search({ loadData, disabled }) {
  const [searchValue, setsearchValue] = useState("");
  const input = useRef(null)

  useEffect(() => {
    input.current.focus()
  })

  const handleSearchValue = (event) => {
    setsearchValue(event.target.value);
  };
  const deb = debounce(loadData, 400);
  return (
    <Input
      className="Search"
      ref={input}
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

import React from "react";
import { Pagination } from "antd";

export default function MoviesList({
  children,
  className,
  currentPage,
  setPage,
}) {
  return (
    <>
      <ul className={className}>{children}</ul>
      <Pagination
        className="Pagination"
        size="small"
        total={50}
        current={currentPage}
        onChange={setPage}
      />
    </>
  );
}

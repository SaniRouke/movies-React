import React from "react";

export default function MoviesList({ children, className }) {
  return <ul className={className}>{children}</ul>;
}

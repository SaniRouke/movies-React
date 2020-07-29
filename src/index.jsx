import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// import defaultData from "./services/default-data";

const apiKey = "e3cafce94e3a863833765608b4d85428";

ReactDOM.render(<App apiKey={apiKey} />, document.getElementById("root"));

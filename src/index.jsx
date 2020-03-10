import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {siteName} from "./config/siteConfig";

ReactDOM.render(siteName, document.getElementById("title"));
ReactDOM.render(<App/>, document.getElementById("root"));

import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import ContributionTable from "./ContributionTable"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <div className="showcase-container">
      <h1 style={{ textAlign: "center" }}>Github Style Contribution Table</h1>
      <ContributionTable />
    </div>
  </React.StrictMode>
)

import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import ContributionTable from "./ContributionTable"

const root = ReactDOM.createRoot(document.getElementById("root"))
const data = []
for (var i = 0; i < 364; i++) {
  data.push(Math.round(Math.random() * 4))
}
root.render(
  <React.StrictMode>
    <div className="showcase-container">
      <h1 style={{ textAlign: "center" }}>Github Style Contribution Table</h1>
      <ContributionTable data={data} />
    </div>
  </React.StrictMode>
)

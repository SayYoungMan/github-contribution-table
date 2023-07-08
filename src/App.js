import "./App.css"

function App() {
  const monthsColSpanList = [
    { month: "Jan", colSpan: 5 },
    { month: "Feb", colSpan: 4 },
    { month: "Mar", colSpan: 4 },
    { month: "Apr", colSpan: 4 },
    { month: "May", colSpan: 5 },
    { month: "Jun", colSpan: 4 },
    { month: "Jul", colSpan: 4 },
    { month: "Aug", colSpan: 5 },
    { month: "Sep", colSpan: 4 },
    { month: "Oct", colSpan: 5 },
    { month: "Nov", colSpan: 4 },
    { month: "Dec", colSpan: 4 },
  ]

  const daysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  return (
    <div className="outer-most-border">
      <div className="outer-table-container">
        <div className="inner-table-container">
          <table>
            <thead>
              <tr style={{ height: "15px" }}>
                <td style={{ width: "29px" }} />
                {monthsColSpanList.map((val) => {
                  return (
                    <td className="table-axis-td" colSpan={val.colSpan}>
                      <span className="month-axis-span" aria-hidden={true}>
                        {val.month}
                      </span>
                    </td>
                  )
                })}
              </tr>
              {daysList.map((day, i) => {
                return (
                  <tr className="grid-row-tr">
                    <td className="table-axis-td">
                      <span
                        className={
                          i % 2 === 0
                            ? "hide-day-axis-span"
                            : "show-day-axis-span"
                        }
                        aria-hidden={true}
                      >
                        {day}
                      </span>
                    </td>
                    {[...Array(52)].map(() => (
                      <td className="cell-basic level-0-cell" />
                    ))}
                  </tr>
                )
              })}
            </thead>
          </table>
        </div>
        <div className="footer-container">
          <div className="footer-caption-container">
            <a
              href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
              className="footer-caption"
            >
              Learn how we count contributions
            </a>
          </div>
          <div className="footer-legend-container">
            Less
            {[...Array(5)].map((x, i) => {
              return (
                <svg>
                  <rect className={`cell-basic level-${i}-cell`} />
                </svg>
              )
            })}
            More
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

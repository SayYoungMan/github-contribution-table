import "./App.css"

function App() {
  return (
    <div className="outer-most-border">
      <div className="outer-table-container">
        <div className="inner-table-container"></div>
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
            <svg>
              <rect className="level-0-grid" />
            </svg>
            <svg>
              <rect className="level-1-grid" />
            </svg>
            <svg>
              <rect className="level-2-grid" />
            </svg>
            <svg>
              <rect className="level-3-grid" />
            </svg>
            <svg>
              <rect className="level-4-grid" />
            </svg>
            More
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [page, setPage] = useState('inbox')

  return (
    <div className="app">
      <header className="header">
        <h1>Employee App</h1>
        <span>Employee Portal</span>
      </header>

      <main className="inbox">
        <aside className="sidebar">
          <h2>Menu</h2>

          <div
            className={`menu ${page === 'inbox' ? 'active' : ''}`}
            onClick={() => setPage('inbox')}
          >
            📥 Inbox
          </div>

          <div
            className={`menu ${page === 'report' ? 'active' : ''}`}
            onClick={() => setPage('report')}
          >
            📋 Reports
          </div>
        </aside>

        <section className="messages">
          {page === 'inbox' ? (
            <>
              <h2>Messages</h2>

              <div className="message">
                <h3>Welcome to the Employee App</h3>
                <p>Your employee inbox is ready.</p>
                <small>Today</small>
              </div>

              <div className="message">
                <h3>Important Announcement</h3>
                <p>Please check the latest company information.</p>
                <small>Yesterday</small>
              </div>
            </>
          ) : (
            <>
              <h2>Submit a Report</h2>

              <form className="report-form">
                <label>Report Title</label>
                <input
                  type="text"
                  placeholder="Enter report title"
                />

                <label>Category</label>
                <select>
                  <option>Workplace Issue</option>
                  <option>Technical Problem</option>
                  <option>Safety Issue</option>
                  <option>Other</option>
                </select>

                <label>Description</label>
                <textarea
                  rows="6"
                  placeholder="Describe the issue..."
                ></textarea>

                <button type="button">
                  Submit Report
                </button>
              </form>
            </>
          )}
        </section>
      </main>
    </div>
  )
}

export default App

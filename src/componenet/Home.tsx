import React from 'react'
import './Home.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to My Vite React App</h1>
      </header>
      <main>
        <p>This is the homepage with a simple layout.</p>
        <button onClick={() => alert('Hello!')}>Click me</button>
      </main>
      <footer>
        <small>&copy; {new Date().getFullYear()} My Website</small>
      </footer>
    </div>
  )
}

export default App

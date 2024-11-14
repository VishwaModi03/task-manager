import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import TaskManager from "./components/TaskManager";
import './App.css';

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <nav style={styles.navbar}>
          <ul style={styles.navLinks}>
            <li style={styles.navItem}><Link style={styles.link} to="/">Home</Link></li>
            <li style={styles.navItem}><Link style={styles.link} to="/about">About</Link></li>
            <li style={styles.navItem}><Link style={styles.link} to="/contact">Contact</Link></li>
            <li style={styles.navItem}><Link style={styles.link} to="/tasks">Task Manager</Link></li>
          </ul>
        </nav>

        <div style={styles.contentContainer}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/tasks" element={<TaskManager />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

// Inline styling for layout and design
const styles = {
  appContainer: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7f6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navbar: {
    width: '100vw', // Full viewport width
    backgroundColor: '#333',
    padding: '10px 0',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '0', // Ensures no extra margin on navbar
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },
  navItem: {
    margin: '0 15px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2em',
  },
  contentContainer: {
    width: '100%',
    maxWidth: '800px',
    padding: '20px',
    marginTop: '20px',
  },
};

// CSS reset for full-width navbar in App.css
document.body.style.margin = 0; // Removes body margin for full-width effect

export default App;

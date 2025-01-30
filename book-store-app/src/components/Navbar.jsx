import React from "react";
import { Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Book Store</h2>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/books" style={styles.link}>Books</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
};

// Inline CSS for Navbar
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    color: "white",
    padding: "15px 30px",
  },
  logo: {
    margin: 0,
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginLeft: "20px",
    fontSize: "18px",
  },
};

export default Navbar;

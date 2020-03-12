import React from "react";

const styles = {
    nav: {
      background: "#e8eaf6",
      padding: 10
    }
  };

class NavBar extends React.Component {

  render() {
    return (
      <ul style={styles.nav} className="nav justify-content-center mt-3">
          <li className="nav-item">
              <h1>Employee Directory</h1>
          </li>
      </ul>
);
  }
}

export default NavBar;

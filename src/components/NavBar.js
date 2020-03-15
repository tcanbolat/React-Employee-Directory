import React from "react";

const styles = {
    nav: {
      background: "#e8eaf6",
      padding: 20,
      textAlign: "center",
      fontFamily: "arial, sans-serif",
      marginTop: 30,
      borderRadius: 50,
      fontSize: 50,
      fontWeight: "bold",
      color: "#4CAF50"
    }
  };

class NavBar extends React.Component {

  render() {
    return  <h1 className="container" style={styles.nav}>Employee Directory</h1>;
  }
}

export default NavBar;

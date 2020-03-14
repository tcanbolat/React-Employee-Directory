import React from "react";

const styles = {
    nav: {
      background: "#e8eaf6",
      padding: 20,
      textAlign: "center",
      fontFamily: "arial, sans-serif",
      marginTop: 10,
      marginBottom: 20
    }
  };

class NavBar extends React.Component {

  render() {
    return  <h1 style={styles.nav}>Employee Directory</h1>;
  }
}

export default NavBar;

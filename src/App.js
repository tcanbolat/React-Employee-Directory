import React from "react";
import NavBar from './components/NavBar';
import Table from './components/Table';
import SearchBar from './components/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div>
      <NavBar />
      <SearchBar />
      <Table />
      </div>

    )
  }
}

export default App;
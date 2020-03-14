import React from "react";
import UserRows from "./UserRows";
// import TableHeader from "./TableHead";
import API from "../utils/API.js";
import "../styles/style.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    API.randomUsers().then(answer => {
      console.log(answer.data.results);
      this.setState({ users: answer.data.results });
    });
  }

  sortBy(key, data) {
    console.log(key);

    this.setState({
      users: data.sort((a, b) =>
       a.name.first.localeCompare(b.name.first))
       
    });

  }

  render() {
    return (
      <div className="table-responsive">
        <table id="users" className="table">
          <thead>
            <tr>
              <th>image</th>
              <th onClick={() => this.sortBy("user.name.first", this.state.users)}>Name</th>
              <th onClick={() => this.sortBy("user.phone", this.state.users)}>Phone</th>
              <th>Email</th>
              <th>Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            <UserRows users={this.state.users} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;

import React from "react";
import UserRows from "./UserRows";
// import TableHeader from "./TableHead";
import API from "../utils/API.js";
import "../styles/style.css";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      sortDir: "asc"
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
      users: data.sort((a, b) => { 
        if (key === 'phone') {
          if (this.state.sortDir === "asc") {
            return a.phone.localeCompare(b.phone);
          } else {
            return b.phone.localeCompare(a.phone);
          }
        }
        if (key === 'firstname') {
          if (this.state.sortDir === "asc") {
            return a.name.first.localeCompare(b.name.first);
          } else {
            return b.name.first.localeCompare(a.name.first);
          }
        }
        if (key === 'dob') {
          if (this.state.sortDir === "asc") {
            return a.dob.date.localeCompare(b.dob.date);
          } else {
            return b.dob.date.localeCompare(a.dob.date);
          }
        }
      }
       )
    });
    this.setState({ sortDir: this.state.sortDir === "asc" ? "desc" : "asc" });
  }
  render() {
    return (
      <div className="table-responsive">
        <table id="users" className="table">
          <thead>
            <tr>
              <th>image</th>
              <th onClick={() => this.sortBy("firstname", this.state.users)}>Name</th>
              <th onClick={() => this.sortBy("phone", this.state.users)}>Phone</th>
              <th>Email</th>
              <th onClick={() => this.sortBy("dob", this.state.users)}>Date of Birth</th>
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
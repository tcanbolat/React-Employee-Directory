import React from "react";
import UserRows from './UserRows';
import API from "../utils/API.js";

class Table extends React.Component {


    componentDidMount() {
      API.randomUsers().then(results => {
        this.setState({
          users: results.data.results
        });
      });
    }

  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Date of Birth</th>
              </tr>
            </thead>
            <tbody>
              <UserRows users={this.state.users}/> 
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Table;

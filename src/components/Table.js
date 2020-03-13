import React from "react";
import UserRows from './UserRows';
import API from "../utils/API.js";

class Table extends React.Component {
  state = {
    users: []
  };

    componentDidMount() {
      API.randomUsers().then(answer => {
        this.setState({users: answer.data.results,})
      });
    }
    
  render() {
    return (
      <div className="container">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>image</th>
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

import React from "react";



function UserRows(props) {
    return(
        props.map(user => 
            <tr>
              <td>{user.name.first}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.dob.age}</td>
            </tr>
          )
    )
  }

export default UserRows;

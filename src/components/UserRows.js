import React from "react";

function UserRows(props) {



  return props.users.map(user => (
    <tr key={user.login.uuid}>
      <td><img src={user.picture.thumbnail} alt='user headshot'/></td>
      <td>{user.name.first + ' ' + user.name.last}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>{user.dob.date.split('T')[0]}</td>
    </tr>
  ));
}

export default UserRows;

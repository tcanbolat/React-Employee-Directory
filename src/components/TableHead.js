import React from 'react';

function TableHeader({props, users, sortBy}) {


    return (
        <tr>
        <th>image</th>
        <th onClick={() => sortBy('user.name.first', users)}>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Date of Birth</th>
      </tr>
    )
}

export default TableHeader;
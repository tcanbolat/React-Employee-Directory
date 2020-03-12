import React from 'react';

class TableHeader extends React.Component {
    render() {
        let header = Object.keys(this.state.students[0]);
        
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th> 
    }

    })
  };

  export default renderTableHeader;
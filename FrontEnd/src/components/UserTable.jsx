import React from 'react';
import './UserTable.css';

const UserTable = ({ data=[] }) => {
  return (
    <div className="table-card">
      <h3 className="table-title">Detailed Table</h3>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Department</th>
            <th>Email</th>
            <th>ID</th>
            <th>isVerified</th>
            <th>Name</th>
            <th>orgId</th>
            <th>secret</th>
            <th>Status</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
                <td><input type="checkbox"/></td>
                <td>{item.department}</td>
                <td>{item.email}</td>
                <td>{item.id}</td>
                <td>{item.isVerified? "true":"false"}</td>
                <td>{item.name}</td>
                <td>{item.orgId}</td>
                <td>{item.secret}</td>               
                <td>{item.status}</td>
                <td>{item.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
          <br></br>
      <button>SET Active</button>
      <button>SET Inactive</button>
    </div>
  );
};

export default UserTable;

import React from "react";
import "./Table.css";

export const Table = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Item</td>
            <td>Category</td>
            <td>Type</td>
            <td>Quantity</td>
            <td>Value</td>
            <td>Delete Item</td>
          </tr>
        </thead>
        
          
            {children}
          
        
      </table>
    </div>
  );
};
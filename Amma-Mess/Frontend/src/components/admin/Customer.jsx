import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/Table.css';

const Customer = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/customers')
      .then(response => setCustomers(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="contain-table" style={{ margin: '50px' }}>
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Cluster</th>
            <th>Meal Plan</th>
            <th>Payment Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer._id}>
              <td>{index + 1}</td>
              <td>{customer.name}</td>
              <td>{customer.cluster.name}</td>
              <td>{customer.mealPlan}</td>
              <td>{customer.paymentStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;

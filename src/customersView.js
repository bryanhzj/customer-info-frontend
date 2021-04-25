import React, { useEffect, useState } from 'react';

function CustomerTable() {
    const [customers, setCustomers] = useState([])

    useEffect (() => {
        fetch ("http://localhost:8000/api/customers", {
            headers: {
				'accept': 'application/json'
			}
        })
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(data => {
            setCustomers(data)
        })
    }, [])

    return (
        <div>
            <h2>Customer Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Contact Number</th>
                    </tr>
                    {customers.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.emailAdd}</td>
                            <td>{item.contactNumber}</td>
                        </tr>
                    ))}
                </thead>
            </table>

            {/* <p>{customers}</p> */}

            {/* <p>{customers[0].firstName}</p> */}
            {/* <p>{customers[0].lastName}</p>
            <p>{customers[0].emailAdd}</p>
            <p>{customers[0].contactNumber}</p> */}
        </div>
    )
}

export default CustomerTable
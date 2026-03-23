import React, { useState, useEffect } from 'react'

function UserData() {
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUserData(data));

    }, [])
    return (
        <div style={{textAlign:'center'}}>
            <h1>UserData-Fetch API</h1>
            <table border="2" style={{margin:'0 auto'}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody >
                    {userData.map((Details) => (
                        <tr key={Details.id}>
                            <td>{Details.id}</td>
                            <td>{Details.name}</td>
                            <td>{Details.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
} 

export default UserData
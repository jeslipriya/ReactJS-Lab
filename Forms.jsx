import React, { useState } from 'react'

function Forms() {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[submittedData, setSubmittedDate] = useState(null);


    const handleSubmit = (e) =>{
        e.preventDefault();

        const formData = {name, email, password}

        setSubmittedDate(formData);
        setName("");
        setEmail("");
        setPassword("");
    }
   
   
    return (
        <div style={{textAlign: 'center', fontSize: '20px'}}>
            <h1>Forms</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text" id="name" placeholder='Enter your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /> <br /> <br />

                <input
                    type="email" id="email" placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                /> <br /> <br />

                <input type="password" id="pass" placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /> <br /> <br />

           
                <button type='submit'>Submit</button>
            </form>

            <br /><br />

            {submittedData && (
                <div>
                    <h1>Submitted Data</h1>
                    <p><strong>Name : </strong> {submittedData.name} </p>
                    <p><strong>Email : </strong> {submittedData.email} </p>
                    <p><strong>Password : </strong> {submittedData.password} </p>
                    
                </div>
            )}

        </div>
    )
}

export default Forms;
import React, { useEffect, useState } from 'react'

function App() {
    const [greetings, setGreetings] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();

            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');

            let message = "";

            if (hours < 12) {
                message = `Good Morning ${hours}:${minutes}:${seconds}`;
            } 
            else if (hours < 17) {
                message = `Good Afternoon ${hours}:${minutes}:${seconds}`;
            } 
            else if (hours < 19) {
                message = `Good Evening ${hours}:${minutes}:${seconds}`;
            } 
            else {
                message = `Good Night ${hours}:${minutes}:${seconds}`;
            }

            setGreetings(message);
        }, 1000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <div style={{textAlign: 'center' , fontSize:'50px', marginTop: '350px'}}>
            <strong> {greetings} </strong>    
        </div>
    );
}

export default App;
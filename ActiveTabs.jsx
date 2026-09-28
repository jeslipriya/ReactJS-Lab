import React, { useState } from 'react'


function TabComponent() {
    const [activeTab,setActiveTab]=useState("Home")

    return (
        <div style={Styles.container}>
            <h1>Hi! Tab-Component</h1>

            <div style={Styles.tabContainer}>
                <button onClick={()=>setActiveTab("Home")}>Home</button>
                <button onClick={()=>setActiveTab("About")}>About</button>
                <button onClick={()=>setActiveTab("Contact")}>Contact</button>
            </div>  

            <div style={Styles.ContentBox}>
                {activeTab === "Home" && <p>Home</p>}
                {activeTab === "About" && <p>ReactJs sec lab</p>}   
                {activeTab === "Contact" && <p>Contact Information</p>}      
            </div>    
        </div>
    )
}
const Styles = {
container: {
gap: "10px",
textAlign: "center",
padding: "20px",
fontFamily: "Arial",
},

tabContainer: {
  display: "flex",
  justifyContent: "center",
 gap: "20px",
marginBottom: "20px",
},

btn: {
gap: "10px",
padding: "10px 20px",
margin: "5px",
cursor: "pointer",
background: "#ddd",
border: "1px solid #aaa",
borderRadius: "5px",
},

activeBtn: {
padding: "10px 20px",
margin: "5px",
cursor: "pointer",
background: "#4caf50",
color: "white",
border: "1px solid #3e8e41",
borderRadius: "5px",
},

contentBox: {
gap: "10px",
padding: "20px",
border: "1px solid #ccc",
width: "300px",
margin: "0 auto",
borderRadius: "5px",
background: "#f9f9f9",
},
};

export default TabComponent

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
const Styles={
    container:{
        minHeight:"100px",
        padding:"20px",
        border:"1px solid",
        textAlign:"center"
    },
    tabContainer:{
        padding:"20px",
        border:"none",
        margin:"20px",
        alignItems:"center",
    },
    ContentBox:{
        height:"100px",
        width:"300px",
        marginLeft:"20px",
        background:"lightblue",
        paddingTop:"10px",
    },
}
export default TabComponent
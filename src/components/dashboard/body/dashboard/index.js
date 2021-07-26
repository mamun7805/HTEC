import React from 'react';
import "./index.css";


const data = [
    {
        "name" : "Machine 01",
        "machine_no": "1",
        "status" : 1
    },
    {
        "name" : "Machine 02",
        "machine_no": "2",
        "status" : 0
    },
    {
        "name" : "Machine 03",
        "machine_no": "3",
        "status" : 1
    },
    {
        "name" : "Machine 04",
        "machine_no": "4",
        "status" : 1
    },
    {
        "name" : "Machine 05",
        "machine_no": "5",
        "status" : 1
    },
    {
        "name" : "Machine 05",
        "machine_no": "5",
        "status" : 1
    },
    {
        "name" : "Machine 05",
        "machine_no": "5",
        "status" : 1
    },
    {
        "name" : "Machine 05",
        "machine_no": "5",
        "status" : 1
    },
    {
        "name" : "Machine 05",
        "machine_no": "5",
        "status" : 1
    },
    {
        "name" : "Machine 05",
        "machine_no": "5",
        "status" : 1
    },
    {
        "name" : "Machine 05",
        "machine_no": "5",
        "status" : 1
    }
]



function Dashboard(){

    return(
        <>
            <div className = "container machine-container">
           {data.map(d=> 
            
                <div className = {d.status === 0? 'machine-off': "machine-on"}>
                     {d.name}
                     
                </div>
            
            )} 
             
            </div>


        </>

    )
}
export default Dashboard;
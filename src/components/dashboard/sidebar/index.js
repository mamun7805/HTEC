import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import "./index.css";


function Sidebar(){

    const [toogle, setToggle] = useState(0);

    const togleTab = (index)=> {
        setToggle(index)
    }

    return(
        <>
          
             <div className = "sidebar-container ">
                 <Link to = "/dashboard"
                     className = {toogle ===1? "active": ""}
                    onClick = {()=> togleTab(1)}
                 >Dashboard</Link>
                 <Link to = "/statistics"
                    className = {toogle === 2? "active": ""}
                    onClick = {()=> togleTab(2)}
                 > Statistics </Link>
                 <Link to = "/users"
                    className = {toogle === 3? "active": ""}
                    onClick = {()=>togleTab(3)}
                    > Users </Link>
             </div>
        </>

    )
}

export default Sidebar;
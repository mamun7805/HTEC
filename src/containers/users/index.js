import React from 'react';
import Users_component from '../../components/dashboard/body/users/index';
import Layout from '../../components/dashboard/header/layout';
import Sidebar from '../../components/dashboard/sidebar';

function Users(){

    return(
        <>

        <Layout>
            <Sidebar/> 
                <div className = "row">
                    <div className = "col">
                    
                    </div>
                    <div className = "col">
                        <Users_component/>
                    </div>
                </div>
                
            </Layout>
        </>
    )
}


export default Users;
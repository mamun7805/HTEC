import React from 'react';
import Statistics_component from '../..//components/dashboard/body/statistics';
import Layout from '../../components/dashboard/header/layout';
import Sidebar from '../../components/dashboard/sidebar'
function Statistics(){

    return(
        <>

        <Layout>
            <Sidebar/> 
                <div className = "row">
                    <div className = "col">
                    
                    </div>
                    <div className = "col">
                        <Statistics_component/>
                    </div>
                </div>
                
            </Layout>


        </>
    )
}


export default Statistics;
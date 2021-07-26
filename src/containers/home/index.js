import React from 'react';
import Layout from "../../components/dashboard/header/layout";
import Sidebar from '../../components/dashboard/sidebar/index';
import Dashboard_body from '../../components/dashboard/body/dashboard/index';


function Home(){

    return(
        <>
            <Layout>

               
                <div className = "row">
                    <div className = "col">
                    <Sidebar/> 
                    </div>
                    <div className = "col-md-10">
                        <div className = "p-5"> 
                          <Dashboard_body/>
                          </div>
                    </div>

                </div>
            </Layout>

        </>
    )
}

export default Home;
import React from 'react'
import Header from '../../components/Dashboard/Header/Header'
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Widget from '../../components/widget/widget'
import Customers from '../../components/Dashboard/customers/customers'
import "./home.css";

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <div className='homeContainer'>
                <Header />
                <div className="widgets">
                    <Widget type ="booking" />
                    <Widget type ="occupation"/>
                    <Widget type ="check-in"/>
                    <Widget type ="check-out"/>
                </div>
                <div className="customers">
                    <Customers />
                </div>
            </div>
        </div>
    )
}

export default Home

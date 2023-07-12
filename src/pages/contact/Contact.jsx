import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import Customers from '../../components/Dashboard/customers/customers';
import ContactList from './ContactList';
import contactListData from "./contactListData.json"
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import TableContact from "../../components/table/tableContact"

function Contact() {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <Provider store={store}>
        <div className='home'>
        {showSidebar && <Sidebar />}
            <div className="homeContainer">
                <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
                <Customers />
                <ContactList />
                <TableContact contact={contactListData} />
            </div>
        </div>
        </Provider>
    )
}

export default Contact

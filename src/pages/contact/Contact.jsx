import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header.tsx'
import Customers from '../../components/Dashboard/customers/contactCard';
import ContactList from './ContactList';
import ContactData from "../contact/ContactData.json"
import { store } from '../../store/store';
import { Provider } from 'react-redux';
import ContactCards from '../../components/Dashboard/customers/contactDetails';
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
                {/* <Customers /> */}
                <ContactCards />
                <TableContact contact={ContactData} />
            </div>
        </div>
        </Provider>
    )
}

export default Contact

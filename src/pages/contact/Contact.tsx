import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import Customers from '../../components/Dashboard/customers/contactCard';


import ContactCards from '../../components/Dashboard/customers/contactDetails';
import TableContact from "../../components/table/tableContact"
import { useDispatch, useSelector } from 'react-redux';
import { getContactList } from '../../features/contact/ContactThunks';
import { RootState, AppDispatch } from '../../store/store';
import ContactData from "./ContactData.json";

function Contact() {
    const [showSidebar, setShowSidebar] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    const { data, status, error } = useSelector((state: RootState) => state.contact);
    

    useEffect(() => {
        dispatch(getContactList());
    }, [dispatch]);

    const toggleSidebar = () => setShowSidebar(!showSidebar);

    if (status === 'pending') return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;


    return (
        <div className='home'>
        {showSidebar && <Sidebar />}
            <div className="homeContainer">
                <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
                <Customers />
                <ContactCards editContact={null} />
                <TableContact contact={data.ContactData} />
            </div>
        </div>
    )
}

export default Contact

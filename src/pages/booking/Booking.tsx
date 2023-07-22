import  { useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import Table from '../../components/table/tableBooking'
import BookingList from './BookingList';
import BookingData from "./BookingData.json"
import { store } from '../../store/store';
import { Provider } from 'react-redux';

function Booking() {

    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    
    return (
        <Provider store={store}>
            <div className='home'>
                {showSidebar && <Sidebar />}
                <div className="homeContainer">
                    <Header  toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
                    <BookingList />
                    <Table bookings={BookingData}/>
                </div>
            </div>
        </Provider>
    ) 
}

export default Booking

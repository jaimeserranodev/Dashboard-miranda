import  { useState, useEffect } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import Table from '../../components/table/tableBooking'
import BookingList from './BookingList';
import BookingData from "./BookingData.json"
import { store, AppDispatch, RootState } from '../../store/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { getBookingList } from '../../features/booking/BookingThunks';

function Booking() {

    const [showSidebar, setShowSidebar] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.booking);
    console.log("holahola", data);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    useEffect(() => {
        dispatch(getBookingList());
    }, [dispatch])
    
    
    return (
        <Provider store={store}>
            <div className='home'>
                {showSidebar && <Sidebar />}
                <div className="homeContainer">
                    <Header  toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
                    <BookingList />
                    <Table bookings={data}/>
                </div>
            </div>
        </Provider>
    ) 
}

export default Booking

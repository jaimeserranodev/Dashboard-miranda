import React from 'react'
import { BiBed } from 'react-icons/bi';
import { LuCalendarCheck2 } from 'react-icons/lu';
import { BsBoxArrowRight } from 'react-icons/bs';
import { BsBoxArrowLeft } from 'react-icons/bs';
import "./styles/widget.css"

const Widget = ({ type }) => {

    let data;
        switch(type){
            case "booking":
                data={
                    icon: <BiBed className='widget-icon'/>,
                    number: "1111",
                    subtitle: "Bookings",
                };
                break;
            case "occupation":
                data={
                    icon: <LuCalendarCheck2 className='widget-icon'/>,
                    number: "2222",
                    subtitle: "Scheduled Room",
                };
                break;
            case "check-in":
                data={
                    icon: <BsBoxArrowRight className='widget-icon'/>,
                    number: "3333",
                    subtitle: "Check In",
                };
                break;
            case "check-out":
                data={
                    icon: <BsBoxArrowLeft className='widget-icon'/>,
                    number: "4444",
                    subtitle: "Check Out",
                };
                break;
                default:

        }
    return (
        <div className="widgets">
            <div className="widgetsContainer">
                <div className='widget'>
                    <div className="left"> 
                        {data.icon}
                    </div>
                    <div className="right">
                        <span className='number'>{data.number}</span>
                        <span className='subtitle'>{data.subtitle}</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Widget
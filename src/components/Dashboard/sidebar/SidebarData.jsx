
import React from 'react'
import { LuLayoutDashboard, LuCalendarCheck2 } from 'react-icons/lu';
import { BiKey } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { HiOutlinePuzzle } from 'react-icons/hi';
export const SidebarData = [
{
    title:"Dashboard",
    icon: <LuLayoutDashboard />,
    link: "/",
},
{
    title:"Bookings",
    icon: <LuCalendarCheck2 />,
    link: "/Booking",
},
{
    title:"Rooms",
    icon: <BiKey />,
    link: "/Rooms",
},
{
    title:"Contact",
    icon: <BsPerson />,
    link: "/Contact",
},
{
    title:"Users",
    icon: <HiOutlinePuzzle />,
    link: "/Users",
},
] 

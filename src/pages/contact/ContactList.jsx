import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ContactList = () => {

    return (
        <div className='ContactList'>
            <div className="menu">
                <button className='menu_button' >All Contact</button>
                <button className='menu_button' >Archived</button>
            </div>
            <div className="select">
                <select name="newest" id="">Newest</select>
            </div>
        </div>
    )
}

export default ContactList
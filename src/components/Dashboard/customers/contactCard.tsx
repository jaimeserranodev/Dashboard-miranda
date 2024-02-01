import React, { useEffect, useState } from 'react'
import { getContactList } from '../../../features/contact/ContactThunks';
import ContactDetails from './contactDetails';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { Contact } from '../../../types/features';

import "../customers/styles/contact/contact.css"
const ContactCards = () => {
  const { data, status } = useAppSelector(state => state.contact);
  const [unreadContacts, setUnreadContacts] = useState<Contact[]>([]);
  const [editContact, setEditContact] = useState<Contact | null>(null);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === 'not-loaded') {
      dispatch(getContactList());
    } else {
        setUnreadContacts(data.contactList.slice().reverse().slice(0, 5));
    }
    // eslint-disable-next-line
  }, [data])

  const handleCheck = (e: React.MouseEvent<HTMLElement>, contactId: string) => {
    e.stopPropagation();
    setUnreadContacts(unreadContacts.filter(({ _id }) => _id !== contactId));
  }
  
  return (
    <>{ unreadContacts.length > 0 &&
      <div className='contacts'>
      <div className='contacts__cards'>
        {
          unreadContacts.map((contact) => (
              <div key={contact._id} onClick={() => setEditContact(contact)} className='contacts__cards__card'>
                <p className='contacts__cards__card__text'>{contact.comment}</p>
                <div className='contacts__cards__card__flex'>
                <img src={contact.photo} alt={contact.name} className='contacts__cards__card__flex__img' />
                  <div className='contacts__cards__card__flex__main'>
                    <p className='contacts__cards__card__flex__main__name'>{contact.name}</p>
                    <p className='contacts__cards__card__flex__main__time'>1 day ago</p>
                  </div>
                  <div className='contacts__cards__card__flex__read'>
                    <i onClick={(e) => handleCheck(e, contact._id)} className='fa-regular fa-circle-check contacts__cards__card__flex__read__true'></i>
                    <i onClick={(e) => handleCheck(e, contact._id)} className='fa-regular fa-circle-xmark contacts__cards__card__flex__read__false'></i>
                  </div>
                </div>
              </div>
          ))
        }
      </div>
      </div>}
      <ContactDetails editContact={editContact} />
    </>
  )
}

export default ContactCards
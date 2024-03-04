import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Contact } from '../../../types/features';
import { ImCross } from 'react-icons/im';
import './styles/contact/contactDetails/contactDetails.css';

interface ContactDetailsProps { // Cambiado de ContactDetails a ContactDetailsProps
  editContact: Contact | null;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({ editContact }) => { // Usando el nuevo nombre de la interfaz
  const [hide, setHide] = useState(!!editContact); 

  useEffect(() => {
    editContact ? setHide(false) : setHide(true);
  }, [editContact]);

  return (
    editContact && (
      <div className={`details-modal ${hide ? 'details-modal--hidden' : ''}`}>
        <div className='details-modal__card'>
          <p className='details-modal__card__title'>{editContact.subject}</p>
          <p className='details-modal__card__text'>{editContact.comment}</p>
          <button onClick={() => setHide(true)} className='details-modal__card__close'>
          <ImCross/>
          </button>
          <div className='details-modal__card__btn'>
            <Link to={`/contact/${editContact._id}`}>Edit Contact</Link>
          </div>
        </div>
      </div>
    )
  );
}

export default ContactDetails;
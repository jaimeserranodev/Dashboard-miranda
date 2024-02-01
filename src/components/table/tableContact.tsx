import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import {  getContactList, archiveContactById } from "../../features/contact/ContactThunks";

import { sortOrFilterContactsBy } from '../../utils/sortOtFilterContactsBy';

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import  ContactData  from "./../../pages/contact/ContactData.json";
import { Contact } from '../../types/features';
import "../table/styles/tableContact/tableContact.css"


interface TableProps {
  contact: any[];
}

const TableContact: React.FC<TableProps> = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [showContacts, setShowContacts] = useState<Contact[]>([]);
  const [pagination, setPagination] = useState(1);
  const [sortOrFilterBy, setSortOrFilterBy] = useState('newest');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Suponiendo que ContactData es un array de objetos Contact
    setContacts(sortOrFilterContactsBy(sortOrFilterBy, ContactData));
    // No es necesario dependencia en ContactData ya que es un dato estático importado
  }, [sortOrFilterBy]);

  useEffect(() => {
    let index = (pagination - 1) * 10;
    setShowContacts(contacts.slice(index, index + 10));
  }, [pagination, contacts]);

  const handleArchive = (e: React.MouseEvent<HTMLButtonElement>, _id: string) => {
    dispatch(archiveContactById(_id));
    e.stopPropagation();
  };

  const handlePreviousPage = () => {
    setPagination((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setPagination((prev) => Math.min(prev + 1, Math.ceil(contacts.length / 10)));
  };
  
    // -----------------------------------------------------------//

  return (
    <>
      <div className='list'>
        
        <div className='list-table'>
        <div className='list__top'>
          <ul className='list__top__menu'>
            <li className={`list__top__menu__item ${sortOrFilterBy !== 'archived' ? 'list__top__menu__item--active' : ''}`} 
              onClick={() => setSortOrFilterBy('newest')}
            >All Contacts</li>
            <li className={`list__top__menu__item ${sortOrFilterBy === 'archived' ? 'list__top__menu__item--active' : ''}`} 
              onClick={() => setSortOrFilterBy('archived')}
            >Archived</li>
          </ul>
          <div className='d-flex-center'>
            <Link to='/contact/create' className='list__top__new-room'>New Contact +</Link>
            <select className='list__top__select' value={sortOrFilterBy} onChange={(e) => setSortOrFilterBy(e.target.value)}>
              <option className='list__top__select__text' value="newest">Newest</option>
              <option className='list__top__select__text' value="oldest">Oldest</option>
            </select>
          </div>
        </div>
        <div className='list__table'>
          <div className='list__table__row list__table__row--first'>
            <p className='list__table__row__item weight-700'>Date</p>
            <p className='list__table__row__item weight-700'>Customer</p>
            <p className='list__table__row__item weight-700'>Subject & Comment</p>
            <p className='list__table__row__item'></p>
          </div>
          
          <ul className='noMargen' style={{ listStyle: 'none' }}>
            
           
            {
              showContacts.length === 0 &&
              <p className='list__table__nothing'>Nothing to show here</p>
            }
            {showContacts.map((contact) => {
              
              return (
                <div key={contact._id} onClick={() => navigate(`/contact/${contact._id}`)} className='list__table__row'>
                  <p className='list__table__row__item weight-500'>

                    {contact.date}
                  </p>
                  <p className='list__table__row__item weight-600'>
                    {contact.name}
                  </p>
                  <div className='list__table__row__item contacts__col-cell'>
                    <p className='weight-500'>{contact.subject}</p>
                    <p className='small-text'>{contact.comment}</p>
                  </div>
                  <div className='list__table__row__item contacts__archive'>
                    <button onClick={(e) => handleArchive(e, contact._id)}>Archive</button>
                  </div>
                </div> 
              )})}
          </ul>
        </div>
        </div>
        <div className='list__bottom'>
          <p className='list__bottom__text'>Showing {showContacts.length} of {contacts.length} Data</p>
          
        </div>
      </div>
      <div className="list__table__pagination">
        <button
          className="list__table__pagination__button"
          onClick={handlePreviousPage}
          disabled={pagination === 1}
        >
          Previous
        </button>
        <button
          className="list__table__pagination__button"
          onClick={handleNextPage}
          disabled={pagination >= Math.ceil(contacts.length)}
        >
          Next
        </button>
      </div>
    
    </>
    
  )
  
}

export default TableContact
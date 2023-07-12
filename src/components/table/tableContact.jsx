import React, { useState } from 'react';
import { useSelector, useDispatch, createSlice } from 'react-redux';

import "./styles/table.css";

//-----------PAGINATION---------------------//

const Pagination = ({ currentPage, totalPages, goToPage, goToNextPage, goToPreviousPage }) => {
  const visiblePageNumbers = [];

  const maxVisiblePages = 4;
  const startPage = Math.max(currentPage - 1, 1);
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    visiblePageNumbers.push(i);
  }

  return (
    <div className='pagination'>
      <button className='btn' onClick={goToPreviousPage} disabled={currentPage === 1}>Prev</button>
      <div className="page-buttons">
        {visiblePageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            className={`page-button ${pageNumber === currentPage ? 'active' : ''}`}
            onClick={() => goToPage(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button className='btn' onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
    </div>
  );
};

//-------------------------- TABLE CONTACT-----------------------//

const TableContact = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 8;
  const currentContact = useSelector((state) => state.contact.list);

  const totalPages = Math.ceil(currentContact.length / contactsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContactPage = currentContact.slice(indexOfFirstContact, indexOfLastContact);

  return (
    <div>
      <table className='table'>
        <tr className='borderTabla'>
          <th className='tableCell'>Date</th>
          <th className='tableCell'>Customer</th>
          <th className='tableCellComment'>Comment</th>
          <th className='tableCell'>Archive</th>
        </tr>
        {currentContactPage.map((contact, index) => (
          <tr
            className='tableRow'
            key={index}
          >
            <td className='tableCell'>{contact.date} <br />{contact.id}</td>
            <td className='tableCell'>{contact.customer} <br />{contact.email} <br />{contact.phoneNumber}</td>
            <td className='tableCellComment'>Lorem ipsum dolor sit amet.</td>
            <td className='tableCell'><button>Publish</button> <button>Archive</button></td>
          </tr>
        ))}
      </table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
      />
    </div>
  );
};

export default TableContact;
import React, { useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import "./RemoveRow.css";

interface IRemoveRow {
  handleDelete: (e: React.MouseEvent<HTMLElement>, _id: string) => void;
  _id: string;
}

const RemoveRow: React.FC<IRemoveRow> = ({ handleDelete, _id }) => {
  const [showDelete, setShowDelete] = useState(false);

  const toggleDeleteBtn = (e: React.MouseEvent<HTMLElement>) => {
    setShowDelete(prev => !prev);
    e.stopPropagation();
  }

  const closeDeleteBtn = () => setShowDelete(false);

  useEffect(() => {
    window.addEventListener('click', closeDeleteBtn);

    return () => {
      window.removeEventListener('click', closeDeleteBtn);
    }
  }, [])
  
  return (
    <td className='list__table__row__ellipsis'>
      <button onClick={(e) => toggleDeleteBtn(e)} className='.fa-solid fa-ellipsis-vertical'><BsFillTrashFill /></button>
      {showDelete && (
        <p onClick={(e) => handleDelete(e, _id)} className='list__table__row__delete'>Delete</p>
      )}
    </td>
  )
}

export default RemoveRow;
    import React, { useEffect, useState } from 'react'
    import { Link, useNavigate } from 'react-router-dom';
    import RemoveRow from '../RemoveRow/RemoveRow';
    import { getUserList, deleteUserById} from '../../features/user/UserThunks';
    
    import { orderUsersBy } from '../../utils/orderUsersBy';
    import { useAppDispatch, useAppSelector } from '../../store/hooks';
    import { User } from '../../types/features';
    import "./styles/tableUser/tableUser.css"
    import {PiMagnifyingGlassLight} from "react-icons/pi";
import { BsFillTrashFill } from 'react-icons/bs';
import { usersJson as UserData }  from "./../../pages/users/UserData"

    interface TableProps {
        users: any[];
      }
    
    const UserList: React.FC<TableProps> = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [showUsers, setShowUsers] = useState<User[]>([]);
    const [pagination, setPagination] = useState(1);
    const [changeBy, setChangeBy] = useState('all');
    const [searchInput, setSearchInput] = useState<null | string>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
       
        setUsers(orderUsersBy(changeBy, [...UserData]));
        setPagination(1);
        // eslint-disable-next-line
    }, [changeBy])

    useEffect(() => {
        let index = pagination === 1 ? 0 : (pagination-1)*10;
        setShowUsers(users.slice(index, index+10));
    }, [pagination, users])

    useEffect(() => {
        if (searchInput !== null) {
          const filteredUsers = UserData.filter((user: User) =>
            user.full_name?.toLowerCase().includes(searchInput.toLowerCase())
          );
          setUsers(filteredUsers);
        }
      }, [searchInput, UserData]);

    const handleDelete = (e: React.MouseEvent<HTMLElement>, _id: string) => {
        dispatch(deleteUserById(_id));
        dispatch(getUserList())
        e.stopPropagation();
    }

    const handlePageChange = (newPage: number) => {
        setPagination(newPage);
    }

    // ----------------------PAGINATION-------------------------//

    const itemsPerPage = 10;

    const handlePreviousPage = () => {
      if (pagination > 1) {
        setPagination((prev) => prev - 1);
      }
    };
  
    const handleNextPage = () => {
      if (pagination < Math.ceil(users.length / itemsPerPage)) {
        setPagination((prev) => prev + 1);
      }
    };
  
    // -----------------------------------------------------------//

    return (
        <div className='container'>
        <div className='list'>
        <div className='list__top'>
            <ul className='list__top__menu'>
            <li className={`list__top__menu__item ${changeBy !== 'active' && changeBy !== 'inactive' ? 'list__top__menu__item--active' : ''}`} 
                onClick={() => setChangeBy('all')}
            >All Users</li>
            <li className={`list__top__menu__item ${changeBy === 'active' ? 'list__top__menu__item--active' : ''}`} 
                onClick={() => setChangeBy('active')}
            >Active</li>
            <li className={`list__top__menu__item ${changeBy === 'inactive' ? 'list__top__menu__item--active' : ''}`} 
                onClick={() => setChangeBy('inactive')}
            >Inactive</li>
            </ul>
            <div className='d-flex-center'>
            <div className='users__search'>
                <i className='fa-solid fa-magnifying-glass'><PiMagnifyingGlassLight /></i>
                <input type="text" value={searchInput?.toString()} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)} />
            </div>
            <Link to='/users/create' className='list__top__new-room'>New User +</Link>
            <select className='list__top__select' value={changeBy} onChange={(e) => setChangeBy(e.target.value)}>
                <option className='list__top__select__text' value="date">Start Date</option>
                <option className='list__top__select__text' value="name">Name</option>
            </select>
            </div>
        </div>
        <div className='list__table'>
            <div className='list__table__row list__table__row--first'>
            <p className='list__table__row__item weight-700'>Name</p>
            <p className='list__table__row__item weight-700'>Description</p>
            <p className='list__table__row__item weight-700' style={{ justifyContent: 'center' }}>Start Date</p>
            <p className='list__table__row__item weight-700'>Contact</p>
            <p className='list__table__row__item weight-700'>Status</p>
            </div>
            <ul style={{ listStyle: 'none' }}>
            
            { 
                showUsers.length === 0 && <p className='list__table__nothing'>Nothing to show here</p>
            }
            {showUsers.map((user) => {
                return (
                <div key={user._id} onClick={() => navigate(`/users/${user._id}`)} className='list__table__row'>
                    <div className='list__table__row__item'>
                    <img className='users__photo' src={user.photo} alt="" />
                    <div className='users__info'>
                        <p className='weight-500'>{user.full_name}</p>
                        <p className='list__table__row__item__id'>#{user?._id ? user._id.toString().padStart(2, '0') : ''}</p>                        <p style={{ fontSize: '10px' }}>{user.email}</p>
                    </div>
                    </div>
                    <p className='list__table__row__item' style={{ fontSize: '15px' }}>
                    {user.description}
                    </p>
                    <div className='list__table__row__item users__schedule' style={{ justifyContent: 'center' }}>
                    {user.start_date}
                    </div>
                    <div className='list__table__row__item users__phone'>
                    <i className='fa-solid fa-phone'></i>
                    <p>{user.phone || '012 345 678 901'}</p>
                    </div>
                    <div className='list__table__row__item'>
                    <p className={`rooms__status 
                        ${user.state === 'active' ? 'rooms__status--green' : 'rooms__status--red'}`}
                    >{user.state}</p>
                    </div>
                    <button
                  className="deleteButton"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (user?._id) {
                      handleDelete(e, user._id.toString());
                  }
                  }}
                >
                  <BsFillTrashFill />
                </button>
                </div> 
                )})}
            </ul>
        </div>
        {/* <div className='list__bottom'>
        <p className='list__bottom__text'>Showing {showUsers.length} of {data.User.length} Data</p>
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
          disabled={pagination >= Math.ceil(users.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
            </div> */}
        </div>
        </div>
    )
    }

    export default UserList
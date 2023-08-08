    import React, { useEffect, useState } from 'react'
    import { Link, useNavigate } from 'react-router-dom';
    import RemoveRow from '../RemoveRow/RemoveRow';
    import { getUserList, deleteUserById } from '../../features/user/UserSlice';
    import { orderUsersBy } from '../../utils/orderUsersBy';
    import { useAppDispatch, useAppSelector } from '../../store/hooks';
    import { User } from '../../types/features';
    import "./styles/tableUser/tableUser.css"
    import {PiMagnifyingGlassLight} from "react-icons/pi";

    const UserList = () => {
    const { data, status } = useAppSelector(state => state.user);
    const [users, setUsers] = useState<User[]>([]);
    const [showUsers, setShowUsers] = useState<User[]>([]);
    const [pagination, setPagination] = useState(1);
    const [changeBy, setChangeBy] = useState('all');
    const [searchInput, setSearchInput] = useState<null | string>(null);

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (status === 'not-loaded') {
        dispatch(getUserList());
        }
        setUsers(orderUsersBy(changeBy, [...data]));
        setPagination(1);
        // eslint-disable-next-line
    }, [data, changeBy])

    useEffect(() => {
        let index = pagination === 1 ? 0 : (pagination-1)*10;
        setShowUsers(users.slice(index, index+10));
    }, [pagination, users])

    useEffect(() => {
        if (searchInput !== null) {
        setUsers(data.filter(({ full_name }) => full_name?.toLowerCase().includes(searchInput.toLowerCase())));
        }
    }, [searchInput, data])

    const handleDelete = (e: React.MouseEvent<HTMLElement>, userId: number) => {
        dispatch(deleteUserById(userId));
        e.stopPropagation();
    }

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
                <div key={user.id} onClick={() => navigate(`/users/${user.id}`)} className='list__table__row'>
                    <div className='list__table__row__item'>
                    <img className='users__photo' src={user.photo} alt="" />
                    <div className='users__info'>
                        <p className='weight-500'>{user.full_name}</p>
                        <p className='list__table__row__item__id'>#{user.id.toString().padStart(2, '0')}</p>
                        <p style={{ fontSize: '10px' }}>{user.email}</p>
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
                    <RemoveRow handleDelete={handleDelete} id={user.id} />
                </div> 
                )})}
            </ul>
        </div>
        <div className='list__bottom'>
            <p className='list__bottom__text'>Showing {showUsers.length} of {data.length} Data</p>
            
        </div>
        </div>
        </div>
    )
    }

    export default UserList
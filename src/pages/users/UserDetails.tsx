import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getUserList } from '../../features/user/UserThunks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TbEdit } from 'react-icons/tb';
import "./styles/UserDetails/UserDetails.css"

const UserDetails: React.FC = () => {
  const params = useParams();
  const { data, status } = useAppSelector(state => state.user);
  const user = data.User.find(({ _id }) => _id === Number(params.id));

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === 'not-loaded') {
      dispatch(getUserList());
    }
  }, [dispatch, status])

  const statusTagClassMap: { [key: string]: string } = {
    'active': 'details__left__user-status--green',
    'inactive': 'details__left__user-status--red'
  };

  if (!user) {
    return (
      <>
        <h2>User not found</h2>
      </>
    )
  } 
  
  return (
    <div className='details__user'>
      <div className='details__row'>
        <img src={user.photo} alt='' className='details__left__photo'></img>
        <div className='details__left__main'>
          <h2>{user.full_name}</h2>
          <p className='details__left__main__id'>{user.username}</p>
          <div style={{ display: 'flex' }}>
            <button className='details__left__main__phone-btn'>
              <Link to={`/users/update/${user._id}`}>
                <TbEdit size={20} />
              </Link>
            </button>
            <button className='details__left__main__message-btn'>
              <i className='fa-solid fa-message'></i>
              Send message
            </button>
          </div>
        </div>
      </div>
      <div className='details__row'>
        <div className='details__left__check'>
          <p>Email</p>
          <p>{user.email}</p>
        </div>
        <div className='details__left__check'>
          <p>Phone</p>
          <p>{user.phone || '+012 345 678 901'}</p>
        </div>
      </div>
      <div className='details__left__bar'></div>
      <div className='details__row'>
        <div className='details__left__room'>
          <p>Position</p>
          <p>{user.position}</p>
        </div>
        <div className='details__left__room'>
          <p>Start Date</p>
          <p>
            {new Date(user.start_date).toLocaleDateString('en-EU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        </div>
      </div>
      <p className='details__left__facilities'>Job Description</p>
      <p className='details__left__user-description'>{user.description}</p>
      <div className={`details__left__user-status ${statusTagClassMap[user.state || 'active']}`}>
        <p>{user.state}</p>
      </div>
    </div>
  )
}

export default UserDetails
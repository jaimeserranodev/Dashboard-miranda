import React, { useRef } from 'react'
import { createUser } from '../../features/user/UserThunks';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { User } from '../../types/features';

const UserCreate: React.FC = () => {
  const formRef = useRef(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const newUser: User = {
        "_id": Number(formData.get('_id')?.toString()),

        "full_name": formData.get('full_name')?.toString(),
        "username": formData.get('username')?.toString(),
        "position": formData.get('position')?.toString(),
        "photo": formData.get('image')?.toString(),
        "email": formData.get('email')?.toString(),
        "phone": formData.get('phone')?.toString(),
        "description": formData.get('description')?.toString(),
        "start_date": new Date().toISOString().slice(0, 10),
        "state": formData.get('state')?.toString(),
        "password": formData.get('password')?.toString()
      }
      dispatch(createUser(newUser));
      navigate('/users');
    }
  }
  
  return (
    <div className='create'>
      <h2 className='create__title'>Add New User</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="full_name">Full name</label>
              <input name='full_name' type="text" id='full_name' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="email">Email</label>
              <input name='email' type="email" id='email' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="image">Image Url</label>
              <input name='image' type="text" id='image' />
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="username">Username</label>
              <input name='username' type="text" id='username' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="phone">Phone</label>
              <input name='phone' type="tel" id='phone' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="position">Position</label>
              <select name='position' id='position' className='weight-600'>
                <option value="Manager">Manager</option>
                <option value="Room Service">Room Service</option>
                <option value="Receipt">Receipt</option>
              </select>
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="password">Password</label>
              <input name='password' type="password" id='password' />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="state">State</label>
              <select name='state' id='state' className='weight-600'>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="description">Description of job</label>
              <textarea name='description' id="description" cols={30} rows={5}></textarea>
            </div>
          </div>
        </div>
        <button type='submit' className='create__form__btn'>Create User</button>
      </form>
    </div>
  )
}

export default UserCreate
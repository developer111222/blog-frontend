import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../utils/Spinner';
import { Userprofile } from '../../actions/userAction';
import { toast } from 'react-toastify';

const Profile = () => {
  const dispatch = useDispatch();
  const { loading, error, user,isAuthenticated } = useSelector(state => state.users);

  useEffect(() => {
if(!isAuthenticated){

  dispatch(Userprofile());
}
  }, [dispatch,isAuthenticated]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (loading) return <Spinner />;

  return (
    <div>
      <p>Welcome</p>
      {user && user.email ? <p>{user.email}</p> : <p>No email available</p>}
    </div>
  );
};

export default Profile;
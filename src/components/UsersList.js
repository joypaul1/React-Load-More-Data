import React from 'react';
import User from './User';

const UsersList = ({ users }) => {
  
  console.log(users)
  return (
    <div className="user-list">
      {users && users.map((user) => 
        
        <User key={user.uuid}  {...user} />
      
      )}
    </div>
  );
};

export default UsersList;
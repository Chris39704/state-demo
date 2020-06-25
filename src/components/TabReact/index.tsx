import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import UserCard from 'components/UserCardReact';

export default function SimpleTabs({ users }: { users: any }) {
  const [userList, setUserList] = useState([] as any);
  console.log('Rendering container');

  const editUsers = (user: any) => {
    setUserList([...userList, user]);
  };

  return (
    <div>
      <Grid container>
        {users.map((user: any) => (
          <UserCard key={user.id} user={user} editUsers={editUsers} />
        ))}
      </Grid>
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { observer, useObserver } from 'mobx-react-lite';
import { useMST } from 'mobx/index';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

const UserCard = observer(({ id }: { id: string }) => {
  const classes = useStyles();
  const user = useUsers(id);

  console.log('Rendering Card for id: ' + id);

  return (
    user && (
      <Card className={classes.root} key={id}>
        <CardActionArea>
          <CardContent>
            <form className={classes.root} noValidate autoComplete="off">
              <Input
                value={user.name}
                onChange={user.changeName}
                inputProps={{ 'aria-label': 'name' }}
              />
            </form>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={null}>
            Update User
          </Button>
        </CardActions>
      </Card>
    )
  );
});

export default UserCard;

// Using custom hook for data mapping
function useUsers(id: string) {
  const { USER_STORE } = useMST();
  USER_STORE.setDisplayedPerson(id);
  return useObserver(() => USER_STORE.editedPerson);
}

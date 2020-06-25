import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Skills from 'components/SkillCardReact';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

export default function UserCard({
  user,
  editUsers,
}: {
  user: any;
  editUsers: (user: any) => void;
}) {
  const classes = useStyles();
  const [state, setState] = React.useState({ ...user });

  console.log('Rendering Card for id: ' + user.id);

  const editUser = (user?: any) => {
    editUsers(state);
  };

  const editUserSkill = (skills: any) => {
    const updatedUser = { ...user, ...skills };
    setState(updatedUser);
  };

  const handleChangeName = (e: any) => {
    setState({ ...state, name: e.target.value });
  };
  const handleChangeDOB = (e: any) => {
    setState({ ...state, dob: e.target.value });
  };
  const handleChangeLocation = (e: any) => {
    setState({ ...state, location: e.target.value });
  };

  return (
    <Card className={classes.root} key={user.id}>
      <CardActionArea>
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <Input
              value={state.name}
              onChange={handleChangeName}
              inputProps={{ 'aria-label': 'name' }}
            />
            <Input
              value={state.dob}
              onChange={handleChangeDOB}
              inputProps={{ 'aria-label': 'date of birth' }}
            />
            <Input
              value={state.location}
              onChange={handleChangeLocation}
              inputProps={{ 'aria-label': 'location' }}
            />
            <Skills skills={state.skills} edit={editUserSkill} />
          </form>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={editUser}>
          Update User
        </Button>
      </CardActions>
    </Card>
  );
}

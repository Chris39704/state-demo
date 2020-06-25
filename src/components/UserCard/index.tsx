import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Skills from 'components/SkillCard';
import TYPES from 'utils/constants';
import { makeUser } from 'rdx/selectors';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

export default function UserCard({ id }: { id: string }) {
  const classes = useStyles();
  const user = useSelector((state: any) => makeUser(state, id));
  const [state, setState] = React.useState({ ...user });
  const dispatch = useDispatch();

  console.log('Rendering Card for id: ' + id);

  const editUser = () => {
    const updatedUser = { ...user, ...state };
    dispatch({ type: TYPES.EDIT_USER, payload: updatedUser });
  };

  const editUserSkill = (skills: any) => {
    const updatedSkills = { id, ...skills };
    dispatch({ type: TYPES.EDIT_SKILL, payload: updatedSkills });
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

  // const removeUser = () => {
  //     dispatch({ type: TYPES.REMOVE_USER, payload: id });
  // }

  return (
    <Card className={classes.root} key={id}>
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
            <Skills id={id} edit={editUserSkill} />
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

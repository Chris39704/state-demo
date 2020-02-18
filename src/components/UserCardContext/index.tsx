import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Skills from 'components/SkillCardContext';
import TYPES from 'utils/constants';
import { makeUser } from 'context/userSelectors';
import useUsersContext from 'hooks/UserContext';
import useUser from 'hooks/Users';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

export default function UserCard({id} : { id: string }) {
  const classes = useStyles();
  const user = useUser(makeUser, [id]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [ userState, dispatch ] = useUsersContext();
  const [state, setState] = React.useState({...user});

  console.log('Rendering Card for id: ' + id);


const editUser = () => {
  let updatedUser = {...user, ...state };
      // @ts-ignore
    dispatch({ type: TYPES.EDIT_USER_CONTEXT, payload: updatedUser });
}

const editUserSkill = (skills: any) => {
  let updatedSkills = { ...user, ...skills };
      // @ts-ignore
    dispatch({ type: TYPES.EDIT_USER_CONTEXT, payload: updatedSkills });
}

const handleChangeName = (e: any) => {
    setState({ ...state, name: e.target.value });

}
const handleChangeDOB = (e: any) => {
  setState({ ...state, dob: e.target.value });

}
const handleChangeLocation = (e: any) => {
  setState({ ...state , location: e.target.value });

}


// const removeUser = () => {
//     dispatch({ type: TYPES.REMOVE_USER, payload: id });
// }

  return (
    <Card className={classes.root} key={id}>
      <CardActionArea>
        <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
        <Input value={state.name} onChange={handleChangeName} inputProps={{ 'aria-label': 'name' }} />
        <Input value={state.dob} onChange={handleChangeDOB}  inputProps={{ 'aria-label': 'date of birth' }} />
        <Input value={state.location} onChange={handleChangeLocation}  inputProps={{ 'aria-label': 'location' }} />
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
import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Skills from 'components/SkillCardContext';
import TYPES from 'utils/constants';
import { UserConsumer, useUserDispatch } from 'hooks/UserContext';
import { makeUser } from 'context/userSelectors';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

export default function UserCard({ id }: any) {
  const classes = useStyles();
  console.log('Rendering Card for id: ' + id);
  const dispatch = useUserDispatch();

  return useMemo(
    () => (
      <UserConsumer>
        {(value: any) => {
          const user: any = makeUser(value, id);
          const editUserSkill = (skills: any) => {
            const updatedSkills = { ...user, ...skills };
            // @ts-ignore
            dispatch({ type: TYPES.EDIT_USER_CONTEXT, payload: updatedSkills });
          };

          const handleChangeName = (e: any) => {
            dispatch({
              type: TYPES.EDIT_USER_CONTEXT,
              payload: { ...user, name: e.target.value },
            });
          };
          const handleChangeDOB = (e: any) => {
            dispatch({
              type: TYPES.EDIT_USER_CONTEXT,
              payload: { ...user, dob: e.target.value },
            });
          };
          const handleChangeLocation = (e: any) => {
            dispatch({
              type: TYPES.EDIT_USER_CONTEXT,
              payload: { ...user, location: e.target.value },
            });
          };

          return (
            <Card className={classes.root} key={id}>
              <CardActionArea>
                <CardContent>
                  <form className={classes.root} noValidate autoComplete="off">
                    <Input
                      value={user.name}
                      onChange={handleChangeName}
                      inputProps={{ 'aria-label': 'name' }}
                    />
                    <Input
                      value={user.dob}
                      onChange={handleChangeDOB}
                      inputProps={{ 'aria-label': 'date of birth' }}
                    />
                    <Input
                      value={user.location}
                      onChange={handleChangeLocation}
                      inputProps={{ 'aria-label': 'location' }}
                    />
                    <Skills id={id} edit={editUserSkill} />
                  </form>
                </CardContent>
              </CardActionArea>
              <CardActions></CardActions>
            </Card>
          );
        }}
      </UserConsumer>
    ),
    [classes, id]
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Skills from "components/SkillCard";
import { observer, useObserver } from "mobx-react-lite";
import { useMST } from "mobx/index";

const useStyles = makeStyles({
  root: {
    maxWidth: 200
  }
});

const UserCard = observer(({ id }: { id: string }) => {
  const classes = useStyles();
  const user = useUsers(id);

  console.log("Rendering Card for id: " + id);

  const editUser = () => {
    // let updatedUser = {...user, ...state };
  };

  const editUserSkill = (skills: any) => {
    // let updatedSkills = { id, ...skills };
  };

  const handleChangeName = (e: any) => {
    // setState({ ...state, name: e.target.value });
  };
  const handleChangeDOB = (e: any) => {
    // setState({ ...state, dob: e.target.value });
  };
  const handleChangeLocation = (e: any) => {
    // setState({ ...state , location: e.target.value });
  };

  return (
    user && (
      <Card className={classes.root} key={id}>
        <CardActionArea>
          <CardContent>
            <form className={classes.root} noValidate autoComplete="off">
              <Input
                value={user.name}
                onChange={user.changeName}
                inputProps={{ "aria-label": "name" }}
              />
              {/* <Input value={} onChange={handleChangeDOB}  inputProps={{ 'aria-label': 'date of birth' }} />
        <Input value={user.location} onChange={handleChangeLocation}  inputProps={{ 'aria-label': 'location' }} /> */}
              {/* <Skills id={id} edit={editUserSkill} /> */}
            </form>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={editUser}>
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

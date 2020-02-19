import React, { useMemo } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { UserConsumer } from 'hooks/UserContext';
import { makeUserSkills } from 'context/userSelectors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: theme.spacing(0.5),
    },
    chip: {
      margin: theme.spacing(0.5),
    },
  }),
);


export default function Skills({ id, edit } : { id: string; edit: (skills: any) => void }) {
  const classes = useStyles();

  console.log('Rendering Skills for id: ' + id);
  // const skills = useUser('SKILLS', id);
  return useMemo(() => (
    <UserConsumer>
      {(value: any) => {

const skills = makeUserSkills(value, id);

const handleDelete = (skillName: String) => () => {
  const updatedSkills = skills.filter((skill: String) => skill !== skillName);

  edit({ skills: updatedSkills });
};
   return (
    <Paper className={classes.root}>
      {skills?.map((skill: String, index: number) => {
        return (
          <Chip
            key={`skill-${index}`}
            label={skill}
            onDelete={handleDelete(skill)}
            className={classes.chip}
          />
        );
      })}
    </Paper>
  )}
}
</UserConsumer>
), [classes, id, edit])
}
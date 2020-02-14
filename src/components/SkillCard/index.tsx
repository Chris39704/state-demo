import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';

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
  const skills = useSelector((state: any) => state.skills.get(id));

  console.log('Rendering Skills for id: ' + id);

  const handleDelete = (skillName: String) => () => {

    const updatedSkills = skills.filter((skill: String) => skill !== skillName);
    edit({ skills: updatedSkills });
  };

  return (
    <Paper className={classes.root}>
      {skills.map((skill: String, index: number) => {
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
  );
}
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
  })
);

export default function Skills({
  skills,
  edit,
}: {
  skills: string[] | any;
  edit: (skills: any) => void;
}) {
  const classes = useStyles();

  console.log('Rendering Skills');

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

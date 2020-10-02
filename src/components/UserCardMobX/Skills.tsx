import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { observer } from 'mobx-react-lite';
import { useUserStoreWithDataMap } from 'hooks/mobx/UserStore';
import { makeStyles, Theme, createStyles, Chip } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
);

const MobXUserSkillsTSX = ({ id }: { id: string }) => {
  const classes = useStyles();
  const { userById } = useUserStoreWithDataMap((store) => ({
    userById: store.userById,
  }));

  const user = userById(id);

  const deleteSkill = (skill: string) => () => {
    user?.deleteSkill(skill);
  };

  return user && user.showSkills ? (
    <CardContent className={classes.root}>
      {user.skills.map((skill) => (
        <Chip
          key={skill}
          size="small"
          label={skill}
          onDelete={deleteSkill(skill)}
        />
      ))}
    </CardContent>
  ) : null;
};

export const MobXUserSkills = observer(MobXUserSkillsTSX);

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react-lite';
import { useUserStoreWithDataMap } from 'hooks/mobx/UserStore';
import { MobXUserSkills } from './Skills';
import { MobXUserInfo } from './Info';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
});

const MobXUserCardTSX = ({ id }: { id: string }) => {
  const classes = useStyles();

  const { userById } = useUserStoreWithDataMap((store) => ({
    userById: store.userById,
  }));

  const user = userById(id);
  console.log('Rendering Card for id: ' + id);

  return user ? (
    <Card className={classes.root} key={id}>
      <MobXUserInfo id={id} />
      <MobXUserSkills id={id} />
      <CardActions>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={user.submitChanges}
          disableRipple={true}
        >
          Log User
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={user.toggleShowSkills}
          disableRipple={true}
        >
          {user.showSkills ? 'Hide Skills' : 'Show Skills'}
        </Button>
      </CardActions>
    </Card>
  ) : null;
};

export const MobXUserCard = observer(MobXUserCardTSX);

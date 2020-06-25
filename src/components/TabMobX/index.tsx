import React from "react";
import Grid from "@material-ui/core/Grid";
import UserCard from "components/UserCardMobX";
import { observer, useObserver } from "mobx-react-lite";
import { useMST } from "mobx/index";

const SimpleTabs = observer(() => {
  const userIDs = useUsers();

  return (
    <div>
      <Grid container>
        {userIDs.map((id: string) => (
          <UserCard key={id} id={id} />
        ))}
      </Grid>
    </div>
  );
});

function useUsers() {
  const { USER_STORE } = useMST();
  return useObserver(() => USER_STORE.UserIds);
}

export default SimpleTabs;

import { useContext } from 'react';
import {UserContext} from 'hooks/UserContext';

function useUserIds(selector?: any, args?: any[]) {
const users = useContext(UserContext);
if(selector && args) {
const selectedData = selector(users, ...args);

return selectedData;
} if(selector && !args) {
    const selectedData = selector(users);

    return selectedData;
}
else {
return users;
}
}

export default useUserIds;
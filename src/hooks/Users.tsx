import { useContext } from 'react';
import {UserContext} from 'hooks/UserContext';

function useUserIds(type: 'STATE' | 'ACTION', selector?: any, args?: any[]) {
const {users, dispatch} = useContext(UserContext);
if(selector && args) {
const selectedData = selector(users, ...args);
    console.log(selectedData);

return selectedData;
} if(selector && !args) {
    const selectedData = selector(users);

    return selectedData;
}
if(type === 'STATE') {
return users;
} else if(type === 'ACTION') {
    return dispatch;
}
}

export default useUserIds;
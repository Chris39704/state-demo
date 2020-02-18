import { useContext } from 'react';
import {UserContext} from 'hooks/UserContext';

function useUserDispatch() {
const { dispatch } = useContext(UserContext);

return dispatch;
}

export default useUserDispatch;
import { useReducer, createContext } from 'react';
import userReducer from '../context/userReducer';

export const UserContext = createContext([]);

function useUsers() {
const [state, dispatch] = useReducer(userReducer, new Map());

return [state, dispatch]
}

export default useUsers;
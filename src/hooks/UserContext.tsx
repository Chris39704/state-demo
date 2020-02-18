import { createContext, useState } from 'react';
import TYPES from 'utils/constants';


export const UserContext = createContext<null | Map<string, any> | any>(null);

function useUserContext() {
    const [ users, setUsers ] = useState(new Map());

    const updateUser = ({ type, payload } : { type: string, payload: any }) => {
        switch(type) {
            case TYPES.ADD_USER_CONTEXT:
               setUsers(new Map(payload.map((u: any) => [u.id, u])));
               break;
               case TYPES.EDIT_USER_CONTEXT:
                setUsers(new Map(users).set(payload.id, payload));
                break;
              default:
                throw new Error();
        }
    }
       return { users, dispatch: updateUser };
   }

export default useUserContext;

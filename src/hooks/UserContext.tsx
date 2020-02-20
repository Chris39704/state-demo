import React, { createContext } from 'react';
import userReducer from 'context/userReducer';
import { makeUserSkills, makeUser, makeUserIds } from 'context/userSelectors';

type Dispatch = (action: any) => void
type UserProviderProps = {children: React.ReactNode}

const UserStateContext = createContext<null | Map<string, any> | any>(null);
const UserDispatchContext = createContext<Dispatch>((action: any) => null);

function UserProvider({children}: UserProviderProps) {
    const [state, dispatch] = React.useReducer(userReducer, new Map());

    return (
      <UserStateContext.Provider value={state}>
        <UserDispatchContext.Provider value={dispatch}>
          {children}
        </UserDispatchContext.Provider>
      </UserStateContext.Provider>
    )
  }

export function UserConsumer(props: any) {
    return (
      <UserStateContext.Consumer>
        {context => {
          if (context === undefined) {
            throw new Error('UserConsumer must be used within a UserProvider')
          }
          return props.children(context)
        }}
      </UserStateContext.Consumer>
    )
}

export default UserProvider;

export function useUserState() {
    const context = React.useContext(UserStateContext)
    if (context === undefined) {
      throw new Error('useUserState must be used within a UserProvider')
    }
    return context
  }
export function useUserDispatch() {
    const context = React.useContext(UserDispatchContext)
    if (context === undefined) {
      throw new Error('useUserDispatch must be used within a UserProvider')
    }
    return context
  }

export function UpdateUsers(action: any) {
    const dispatch = useUserDispatch()
    dispatch(action);
}


type userSelector = 'STATE' | 'IDS' | 'USER' | 'SKILLS';

export function useUser(type: userSelector, id: any) {
    const state = useUserState();
    switch(type){
        case 'STATE':
        return state;
        case 'IDS':
        return makeUserIds(state);
        case 'USER':
        return makeUser(state, id);
        case 'SKILLS':
        return makeUserSkills(state, id);
    }
}
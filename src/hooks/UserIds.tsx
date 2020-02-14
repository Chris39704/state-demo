import React from 'react';
import { useSelector } from 'react-redux';

function useUserIds() {
    const ids = useSelector((state: any) => state.users.map((user: any) => user.id)).valueSeq().toArray();


return ids;
}

export default useUserIds;
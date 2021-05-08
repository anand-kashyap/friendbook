import { createContext } from 'react';
import { FriendContextType } from './types';

const friendContext = createContext<FriendContextType>({} as FriendContextType);

export default friendContext;

import React from 'react';
import { AuthContext } from './src/domain/store/auth';
import authReducer from './src/domain/store/auth/reducer';
import { authState } from './src/domain/store/auth/types';
import { Navigation } from './src/infraestructure/screens/navigation';
import * as Location from 'expo-location';

export default function App() {

  const [authStore, dispatchAuth] = React.useReducer(authReducer, authState)

  return (
    <AuthContext.Provider value={{ authStore, dispatchAuth }}>
      <Navigation />
    </AuthContext.Provider>
  );
}



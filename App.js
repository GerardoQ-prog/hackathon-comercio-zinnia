import React from 'react';
import { AuthContext } from './src/domain/store/auth';
import authReducer from './src/domain/store/auth/reducer';
import { authState } from './src/domain/store/auth/types';
import { Navigation } from './src/infraestructure/screens/navigation';
import * as Location from 'expo-location';
import { useFonts } from 'expo-font';

export default function App() {

  const [authStore, dispatchAuth] = React.useReducer(authReducer, authState)

  const [location, setLocation] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  console.log(text)

  const [loaded] = useFonts({
    Raleway: require('./src/infraestructure/assets/fonts/Raleway-Regular.ttf'),
  });


  if (!loaded) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ authStore, dispatchAuth }}>
      <Navigation />
    </AuthContext.Provider>
  );
}



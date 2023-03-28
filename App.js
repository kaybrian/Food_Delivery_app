import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from "./screens/ResturantScreen"
import BasketScreen from './screens/basketScreen';
import PreparingOrder from './screens/PreparingOrder';
import Delivery from './screens/Delivery';

import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          {/* screens we are going to create  */}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Resturant" component={ResturantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen}
            options={{
              presentation:"modal", headerShown:false
            }}
          />
        <Stack.Screen name="PreparingOrder" component={PreparingOrder}
          options={{
            presentation:"fullScreenModal",
             headerShown:false
          }}
        />
         <Stack.Screen name="Delivery" component={Delivery}
          options={{
            presentation:"fullScreenModal",
             headerShown:false
          }}
        />

        </Stack.Navigator>

      </Provider>

    </NavigationContainer>
  );
}

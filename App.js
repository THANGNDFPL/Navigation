import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Info from './src/screens/Info';
import UserList from './src/screens/UserList';
import Products from './src/screens/Products';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name="Home"
                component={Home} />
            <Stack.Screen
                name="Info"
                component={Info} />
            <Stack.Screen
                name="UserList"
                component={UserList} />
            <Stack.Screen
                name="Products"
                component={Products} />
        </Stack.Navigator>
    </NavigationContainer>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

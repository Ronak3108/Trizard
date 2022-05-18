import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/native-stack';
import home from './screens/home';
import beaches from './screens/beaches';
import treks from './screens/treks';
import cruise from './screens/cruise';
import historicalPlaces from './screens/historicalPlaces';
import parks from './screens/parks';
import login from './screens/login';
import profile from './screens/profile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'home'/>
      <Stack.Screen name = 'home' component = {home}/>
      <Stack.Screen name = 'beaches' component = {beaches}/>
      <Stack.Screen name = 'treks' component = {treks}/>
      <Stack.Screen name = 'cruise' component = {cruise}/>
      <Stack.Screen name = 'historicalPlaces' component = {historicalPlaces}/>
      <Stack.Screen name = 'parks' component = {parks}/>
      <Stack.Screen name = 'login' component = {login}/>
      <Stack.Screen name = 'profile' component = {profile}/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

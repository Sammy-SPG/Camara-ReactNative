import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import {View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Camera from './components/camera';
import Home from './components/home';
import Login from './components/login';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer initialRouteName="Login">
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ title: 'Inicio de sesion' }}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Inicio', headerRight: () => <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}><Ionicons name="help" size={26} color="black" onPress={() => alert('Ingresa el peso en kilos y la altura en metros')} /><MaterialCommunityIcons style = {{marginLeft: 10}} name="door-closed-lock" size={24} color="black" /></View>}} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

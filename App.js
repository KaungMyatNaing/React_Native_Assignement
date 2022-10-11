import * as React from 'react';
import { Button, View,Text,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text>Home</Text>
    </View>
  );
}

function FavouriteScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favourite Screen</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function All({ navigation }) {
  return (
   <View></View>
  );
}
function Manager({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Manager</Text>
    </View>
  );
}
function BSE({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>BSE</Text>
    </View>
  );
}
function Leader({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Leader</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All" component={All}  options={{ headerShown: false }}  />
      <Tab.Screen name="Manager" component={Manager}  options={{ headerShown: false }} />
      <Tab.Screen name="BSE" component={BSE}  options={{ headerShown: false }} />
      <Tab.Screen name="Leader" component={Leader}  options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
const Drawer = createDrawerNavigator();

function MyDrawer(){
  return (
    
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home" screenOptions={() => ({
        headerStyle: {backgroundColor: 'white',color: 'blue'},headerTitle: 'Seattle Consulting Myanmar',headerTitleStyle: {color: 'purple'}
        
      })}>
        <Drawer.Screen name="Home" component={MyTabs}  />
        <Drawer.Screen name="Favourite" component={FavouriteScreen} />
      </Drawer.Navigator>
      

    
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }}  />
     
     </Stack.Navigator>
     
     
    </NavigationContainer>

    
  );
}

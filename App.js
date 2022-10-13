import * as React from 'react';
import { Button, View,Text,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import UserList from './components/UserList';
import Stolen from './components/Stolen';







function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Home Screen where you can login and create account</Text>
      <Button title='Login' style={{marginBottom: 15}}></Button>
      <Button title='Register' onPress={() => navigation.navigate('Register')}></Button>
    
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
function TeamScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Team</Text>
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
        <Drawer.Screen name="Home" component={HomeScreen}  />
      <Drawer.Screen name="Favourite" component={FavouriteScreen} />
      <Drawer.Screen name="Users" component={UserList} />
      <Drawer.Screen name="Stolen" component={Stolen} />
      <Drawer.Screen name="Team" component={MyTabs} />
      </Drawer.Navigator>
      

    
  );
}
function Register() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{fontSize: 50,fontWeight:'bold'}}>A Step Further Into New</Text>
      <Formik
   validationSchema={loginValidationSchema}
   initialValues={{ email: '', password: '' }}
   onSubmit={values => console.log(values)}
 >
   {({
     handleChange,
     handleBlur,
     handleSubmit,
     values,
     errors,
     isValid,
   }) => (
          <> 
            
       <TextInput
         name="email"
         placeholder="Email Address"
      
         onChangeText={handleChange('email')}
         onBlur={handleBlur('email')}
         value={values.email}
              keyboardType="email-address"
              style={{width: 300, marginBottom: 15}}
       />
       {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
       <TextInput
         name="password"
         placeholder="Password"
         
         onChangeText={handleChange('password')}
         onBlur={handleBlur('password')}
         value={values.password}
              secureTextEntry
              style={{width: 300, marginBottom: 15}}
       />
       {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
            }
            
            <TextInput
         name="repassword"
         placeholder="Re-Password"
         
         onChangeText={handleChange('repassword')}
         onBlur={handleBlur('repassword')}
         value={values.repassword}
              secureTextEntry
              style={{width: 300, marginBottom: 15}}
       />
       {errors.repassword &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.repassword}</Text>
       }
       <Button
         onPress={handleSubmit}
         title="Register"
         disabled={!isValid}
       />
            </>
            
   )}
 </Formik>

    </View>
  );
}

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
    repassword: yup
    .string()
    .required('Please retype your password.')
    .oneOf([yup.ref('password')], 'Your passwords do not match.')
})
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
    
        <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />
      
        <Stack.Screen name="Register" component={Register}/>
     </Stack.Navigator>
     
     
    </NavigationContainer>

    
  );
}

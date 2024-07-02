
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import { COLORS,icons,images, SIZES } from '../constants';
import { ScreenHeaderBtn } from '../components';

const Stack = createNativeStackNavigator();

const Layout = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor:COLORS.lightWhite,
          headerShadowVisible:false
        },
       
      }}>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          headerLeft:()=>(
            <ScreenHeaderBtn  iconUrl={icons.menu} dimension='60%'/>
          ),
          headerRight:()=>(
            <ScreenHeaderBtn  iconUrl={images.profile} dimension='100%'/>
          ),
          headerTitle:""
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;

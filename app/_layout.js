
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import { COLORS,icons,SIZES,images } from '../constants';
import { ScreenHeaderBtn } from '../components';
import JobDetails from './JobDetails';
import JobSearch from './Search/JobSearch';
import Home from './index';
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
         headerTitleAlign:'center',
          headerTitle:"Jobs",
          headerShown:true,
          headerBackVisible:false,
          headerShadowVisible:false,
          headerStyle: {
            backgroundColor: COLORS.tertiary,
            
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="JobDetails" component={JobDetails} 
        options={{
        headerRight:()=>(
          <ScreenHeaderBtn iconUrl={icons.share} dimension='60%' />
        )
      }}
        />
        <Stack.Screen name="JobSearch" component={JobSearch}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Layout;

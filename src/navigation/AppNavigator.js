// AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../AuthContext';

import LoginForm from '../component/LoginForm';
import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailScreen from '../screens/NewDetailScreen';
import StandingsScreen from '../screens/StandingsScreen';
import HomeScreen from '../screens/HomeScreen'; 
import Register from '../screens/Register'; 

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { session, loading } = useAuth();

  if (loading) return null; 

  return (
    <Stack.Navigator initialRouteName={session ? 'Home' : 'Login'}>
      {!session ? (
        <>
        
        <Stack.Screen name="Login" component={LoginForm} />
                <Stack.Screen name="Register" component={Register} />
</>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewsList" component={NewsListScreen} />
          <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
          <Stack.Screen name="Standings" component={StandingsScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

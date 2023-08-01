import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import IntroVideoScreen from '../screens/IntroVideoScreen';
import TinderSwipeUI from '../screens/TinderSwipeUI';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>TEXT SAMPLE</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} 
        options={{headerShown: false}} />
        <Stack.Screen name="IntroVideo" component={IntroVideoScreen} 
        options={{headerShown: false}} />
        <Stack.Screen name="Home" component={TinderSwipeUI}
        options={{ headerTitle: () => (
        <Image style={{width:126, height:40,
        marginLeft:73 }}
        source={require('../images/tinder-logo.png')} />
        ),
        headerStyle: {
          backgroundColor: '#fff',
        },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

import PexelsLogo from './assets/pexels.jpg';

const Stack = createNativeStackNavigator();

export default function App() {

  const [openSearch, setOpenSearch] = useState(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          options={{
            headerLeft: () => <Image source={PexelsLogo} style={styles.logo} />,
            headerRight: () => (
              <Text style={{ color: 'white', fontSize: 18 }}
                onPress={() => setOpenSearch(!openSearch)}>
                {openSearch ? "Close" : "Search"}
              </Text>
            ),
            title: 'Pexeles',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: "#0D0D0D"
            }
          }}>
          {(props) => <HomeScreen {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 37,
    height: 37,
    marginEnd: 5,
    borderRadius: 5
  }
})
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AnimatedCallingScreen from "./AnimatedCallingScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AnimatedCallingScreen count={5} duration={4000}/>
    </View>
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

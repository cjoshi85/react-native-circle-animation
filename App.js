import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import AnimateButton from "./AnimateButton";

export default function App() {
  const animateValue = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <AnimateButton animateValue={animateValue}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

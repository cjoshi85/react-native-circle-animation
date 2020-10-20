import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default class AnimateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  onPress = () => {
    const {index} = this.state;
    Animated.timing(
      this.props.animateValue,
      {
        toValue: index == 1 ? 0 : 1,
        duration: 3000,
        useNativeDriver: false
      }
    ).start();
    this.setState({
      index: index == 1 ? 0 : 1
    })
  };

  render() {
    const {animateValue} = this.props;
    const inputRange = [0, 0.001, 0.5, 0.501, 1];
    return (
      <Animated.View style={[styles.container, {
        backgroundColor: animateValue.interpolate({
          inputRange,
          outputRange: ['#FBBEDB', '#FBBEDB', '#FBBEDB', '#0245D0', '#0245D0']
        })
      }]}>
        <Animated.View style={[
          styles.circle,
          {
            backgroundColor: animateValue.interpolate({
              inputRange,
              outputRange: ['#0245D0', '#0245D0', '#FBBEDB', '#FBBEDB', '#FBBEDB']
            }),
            transform: [
              {perspective: 400},
              {
                rotateY: animateValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ['0deg', '-90deg', '-180deg']
                })
              },
              {
                scale: animateValue.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [1, 8, 1]
                })
              },
            ]
          }
        ]}>
          <TouchableOpacity onPress={this.onPress}>

            <Animated.View
              style={[
                styles.circle,
                styles.circleButton,
                {
                  transform: [
                    {
                      scale: animateValue.interpolate({
                        inputRange: [0, 0.05, 0.5, 1],
                        outputRange: [1, 0, 0, 1],
                      }),
                    },
                    {
                      rotateY: animateValue.interpolate({
                        inputRange: [0, 0.5, 0.9, 1],
                        outputRange: ['0deg', '180deg', '180deg', '180deg'],
                      }),
                    },
                  ],
                  opacity: animateValue.interpolate({
                    inputRange: [0, 0.05, 0.9, 1],
                    outputRange: [1, 0, 0, 1],
                  }),
                },
              ]}
            >
              <AntDesign name='arrowright' size={28} color={'white'}/>
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
    paddingBottom: 100,
    backgroundColor: '#FBBEDB'
  },
  circle: {
    backgroundColor: '#0245D0',
    width: 100,
    height: 100,
    borderRadius: 50
  },
  circleButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

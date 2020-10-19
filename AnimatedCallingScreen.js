import React, { Component } from 'react';
import { View, StyleSheet, Animated, Text } from "react-native";
import { keyframes, stagger } from "popmotion";
import {FontAwesome} from '@expo/vector-icons';

export default class AnimatedCallingScreen extends Component {
  constructor(props) {
    super(props);
    const {count, duration} = this.props;
    const initialPhase = {scale: 0, opacity: 1};
    const constructAnimations = () => [...Array(count).keys()].map(() => initialPhase);
    this.state = {
      count,
      duration,
      initialPhase,
      animations: constructAnimations()
    }
  }

  componentDidMount() {
    this.animateCircles();
  }

  animateCircles = () => {
    const {count, duration, initialPhase} = this.state;
    const actionKeyframes = Array(count).fill(
      keyframes({
        values: [
          initialPhase,
          {scale: 2, opacity: 0}
        ],
        duration,
        loop: Infinity,
        yoyo: Infinity
      })
    );
    stagger(actionKeyframes, duration/count).start(animations => {
      this.setState({animations});
    })
  };

  render() {
    const {animations} = this.state;
    return (
      <>
        {animations && animations.map(({opacity, scale}, index) => {
          return (
            <Animated.View
              key={index}
              style={[
                styles.circle, {
                  transform: [{scale}],
                  opacity
                }
              ]}
            />
          )
        })
        }
        <View style={styles.mainCircle}>
          <FontAwesome name="phone" style={styles.callIcon}/>
          <Text style={styles.callText}>Calling..</Text>
        </View>
      </>
    )
  }
}

const getCircleStyle = ({radius, backgroundColor}) => (
  {
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    backgroundColor,
    position: 'absolute'
  }
)

const styles = StyleSheet.create({
  mainCircle: {
    ...getCircleStyle({radius: 75, backgroundColor: '#2195F2'}),
    alignItems: 'center',
    justifyContent: 'center'
  },
  circle: getCircleStyle({radius: 100, backgroundColor: '#2195F2'}),
  callIcon: {
    color:'#FFF',
    fontSize: 30,
  },
  callText: {
    color:'#FFF',
    fontSize:20
  }
})

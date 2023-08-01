import {View, Text, Dimensions, Image, Animated} from 'react-native';
import React, {useCallback} from 'react';
import TinderLike from './TinderLike';
import LinearGradient from 'react-native-linear-gradient';
const {height, width} = Dimensions.get('window');
const TinderCard = ({item, isFirst, swipe, ...rest}) => {
  const rotate = swipe.x.interpolate({
    inputRange: [-100, 0, 100],
    outputRange: ['8deg', '0deg', '-8deg'],
  });
  const likeOpacity = swipe.x.interpolate({
    inputRange: [10, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });
  const rejectOpacity = swipe.x.interpolate({
    inputRange: [-100, -10],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const renderChoice = useCallback(() => {
    return (
      <>
        <Animated.View
          style={[
            {position: 'absolute', top: 100, left: 20},
            {opacity: likeOpacity},
          ]}>
          <TinderLike type={'Like'} />
        </Animated.View>
        <Animated.View
          style={[
            {position: 'absolute', top: 100, right: 20},
            {opacity: rejectOpacity},
          ]}>
          <TinderLike type={'Nope'} />
        </Animated.View>
      </>
    );
  }, []);
  return (
    <Animated.View
      style={[
        {
          width: width - 20,
          height: height - 200,
          position: 'absolute',
          top: 27,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        },
        isFirst && {
          transform: [...swipe.getTranslateTransform(), {rotate: rotate}],
        },
      ]}
      {...rest}>
      <Image
        source={item.image}
        style={{width: '100%', height: '100%', borderRadius: 20}}
      />
      {isFirst && renderChoice()}
      <LinearGradient
        colors={['transparent', 'transparent', 'rgba(0,0,0,0.5)']}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          borderRadius: 20,
        }}>
        <Text
          style={{
            position: 'absolute',
            bottom: 20,
            left: 30,
            top: 540,
            fontSize: 40,
            color: '#FFF',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            position: 'absolute',
            bottom: 15,
            left: 30,
            fontSize: 25,
            color: '#FFF',
          }}>
          {item.age} {item.address}
        </Text>
      </LinearGradient>
    </Animated.View>
  );
};

export default TinderCard;












// import { StyleSheet, Text, View, Image, Dimensions, Animated } from 'react-native'
// import React from 'react'
// import LinearGradient from 'react-native-linear-gradient';

// const {height,width}=Dimensions.get('window')

// function TinderCard({item, isFirst, swipe, ...rest}) {
//   return (
//     <Animated.View 
//     style={[
//     {
//     width:width-20, 
//     height:height -150,
//     alignSelf: 'center', 
//     position: 'absolute',
//     top: 40,
//     borderRadius: 10,
//     },
//     isFirst && {transform:[...swipe.getTranslateTransform()]},  
//   ]}
//     {...rest}>
//       <Image source={item.image} 
//       style={{
//         width: '100%', 
//         height: '100%',
//         borderRadius: 10}} />
//         <LinearGradient
//         colors={['transparent', 'rgba(0,0,0,0.7)']}
//         style={{
//             width: '100%',
//             height: '100%',
//             borderRadius: 10,
//             position: 'absolute'
//         }}
//         >
//         <Text style={{
//             position:'absolute', 
//             bottom: 20, 
//             left:20,
//             color:'#fff', 
//             fontSize: 40
//             }}>
//             {item.title}</Text>
//         </LinearGradient>
//     </Animated.View>
//   );
// };

// export default TinderCard;

// const styles = StyleSheet.create({})

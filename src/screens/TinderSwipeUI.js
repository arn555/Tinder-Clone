import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Animated,
    PanResponder,
    Dimensions,
  } from 'react-native';
  import React, {useCallback, useEffect, useRef, useState} from 'react';
  import TinderCard from './TinderCard';
  const {height, width} = Dimensions.get('window');
  const TinderSwipeUI = () => {
    const [data, setData] = useState([
          {image: require('../images/Arabic.jpg'), id:1, title: 'Zara', 
           age: '25,',address: 'Dubai' },
          {image: require('../images/Australian.jpg'), id:2, title: 'Mia',
          age: '26,',address: 'Australia'},
          {image: require('../images/Canadian.jpg'), id:3, title: 'Olivia',
          age: '27,',address: 'Canada'},
          {image: require('../images/European.jpg'), id:4, title: 'Alessia',
          age: '23,',address: 'Amsterdam'},
          {image: require('../images/Filipina.jpg'), id:5, title: 'Bianca',
          age: '25,',address: 'Cebu'},
          {image: require('../images/Indian.jpg'), id:6, title: 'Adya',
          age: '24,',address: 'Bangladesh'},
          {image: require('../images/Italian.jpg'), id:7, title: 'Isabella',
          age: '27,',address: 'Rome'},
          {image: require('../images/Korean.jpg'), id:8, title: 'Nabi',
          age: '26,',address: 'Seoul'},
          {image: require('../images/Russian.jpg'), id:9, title: 'Sasha',
          age: '30,',address: 'Ukraine'},
          {image: require('../images/Russian1.jpg'), id:10, title: 'Anastasia',
          age: '28,',address: 'Moscow'},
          {image: require('../images/Thailand.jpg'), id:11, title: 'Kamila',
          age: '28,',address: 'Bangkok'},
          {image: require('../images/turkish.webp'), id:12, title: 'Lara',
          age: '30,',address: 'Turkey'},
    ]);
    useEffect(() => {
      if (!data.length) {
        setData([
            {image: require('../images/Arabic.jpg'), id:1, title: 'Zara', 
            age: '25,',address: 'Dubai' },
           {image: require('../images/Australian.jpg'), id:2, title: 'Mia',
           age: '26,',address: 'Australia'},
           {image: require('../images/Canadian.jpg'), id:3, title: 'Olivia',
           age: '27,',address: 'Canada'},
           {image: require('../images/European.jpg'), id:4, title: 'Alessia',
           age: '23,',address: 'Amsterdam'},
           {image: require('../images/Filipina.jpg'), id:5, title: 'Bianca',
           age: '25,',address: 'Cebu'},
           {image: require('../images/Indian.jpg'), id:6, title: 'Adya',
           age: '24,',address: 'Bangladesh'},
           {image: require('../images/Italian.jpg'), id:7, title: 'Isabella',
           age: '27,',address: 'Rome'},
           {image: require('../images/Korean.jpg'), id:8, title: 'Nabi',
           age: '26,',address: 'Seoul'},
           {image: require('../images/Russian.jpg'), id:9, title: 'Sasha',
           age: '30,',address: 'Ukraine'},
           {image: require('../images/Russian1.jpg'), id:10, title: 'Anastasia',
           age: '28,',address: 'Moscow'},
           {image: require('../images/Thailand.jpg'), id:11, title: 'Kamila',
           age: '28,',address: 'Bangkok'},
           {image: require('../images/turkish.webp'), id:12, title: 'Lara',
           age: '30,',address: 'Turkey'},
        ]);
      }
    }, [data.length]);
    const swipe = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, {dx, dy}) => {
        swipe.setValue({x: dx, y: dy});
      },
      onPanResponderRelease: (_, {dx, dy}) => {
        const direction = Math.sign(dx);
        const isActionActiove = Math.abs(dx) > 200;
        if (isActionActiove) {
          Animated.timing(swipe, {
            toValue: {x: direction * 500, y: dy},
            useNativeDriver: true,
  
            duration: 500,
          }).start(removeCard);
        } else {
          Animated.spring(swipe, {
            toValue: {x: 0, y: 0},
            useNativeDriver: true,
            friction: 5,
          }).start();
        }
      },
    });
    const removeCard = useCallback(() => {
      setData(prevState => prevState.slice(1));
      swipe.setValue({x: 0, y: 0});
    }, [swipe]);
  
    const handleChoiceButtons = useCallback(
      direction => {
        Animated.timing(swipe.x, {
          toValue: direction * width,
          duration: 500,
          useNativeDriver: true,
        }).start(removeCard);
      },
      [removeCard, swipe.x],
    );
    return (
      <View style={{flex: 1}}>
        {data
          .map((item, index) => {
            const isFirst = index === 0;
            const dragHandlers = isFirst ? panResponder.panHandlers : {};
            return (
              <TinderCard
                swipe={swipe}
                item={item}
                isFirst={isFirst}
                {...dragHandlers}
              />
            );
          })
          .reverse()}
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            bottom: 30,
            zIndex: -1,
          }}>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#fff',
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              handleChoiceButtons(-1);
            }}>
            <Image
              source={require('../images/cancel.png')}
              style={{width: 34, height: 34, tintColor: '#FF0060'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#fff',
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              handleChoiceButtons(1);
            }}>
            <Image
              source={require('../images/heart.png')}
              style={{width: 40, height: 40, tintColor: '#00eda6'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default TinderSwipeUI;
  
  // import { Animated, StyleSheet, Text, View,PanResponder } from 'react-native';
  // import {React, useState, useRef, useCallback, useEffect} from 'react'
  // import TinderCard from './TinderCard';
  
  
  // function App() {
  
  //     const [data, setData] = useState([
  //         {image: require('./images/Arabic.jpg'), id:1, title: 'Zara'},
  //         {image: require('./images/Australian.jpg'), id:2, title: 'Mia'},
  //         {image: require('./images/Canadian.jpg'), id:3, title: 'Olivia'},
  //         {image: require('./images/European.jpg'), id:4, title: 'Alessia'},
  //         {image: require('./images/Filipina.jpg'), id:5, title: 'Bianca'},
  //         {image: require('./images/Indian.jpg'), id:6, title: 'Adya'},
  //         {image: require('./images/Italian.jpg'), id:7, title: 'Isabella'},
  //         {image: require('./images/Korean.jpg'), id:8, title: 'Nabi'},
  //         {image: require('./images/Russian.jpg'), id:9, title: 'Sasha'},
  //         {image: require('./images/Russian.jpg'), id:10, title: 'Anastasia'},
  //         {image: require('./images/Thailand.jpg'), id:11, title: 'Kamila'},
  //         {image: require('./images/turkish.webp'), id:12, title: 'Lara'},
  //     ]);
  
          // Zara - arabic
          // Mia - Australian
          // Olivia - Canadian
          // Alessia - European
          // Bianca - Filipina
          // Adya - Indian
          // Isabella - Italian
          // Nabi - Korean
          // Sasha - Russian
          // Anastasia - Russian
          // Kamila - Thailand
          // Lara - Turkish
    //       useEffect(() =>{
    //         if(!data.length){
    //           setData([
    //             {image: require('./images/Arabic.jpg'), id:1, title: 'Zara'},
    //             {image: require('./images/Australian.jpg'), id:2, title: 'Mia'},
    //             {image: require('./images/Canadian.jpg'), id:3, title: 'Olivia'},
    //             {image: require('./images/European.jpg'), id:4, title: 'Alessia'},
    //             {image: require('./images/Filipina.jpg'), id:5, title: 'Bianca'},
    //             {image: require('./images/Indian.jpg'), id:6, title: 'Adya'},
    //             {image: require('./images/Italian.jpg'), id:7, title: 'Isabella'},
    //             {image: require('./images/Korean.jpg'), id:8, title: 'Nabi'},
    //             {image: require('./images/Russian.jpg'), id:9, title: 'Sasha'},
    //             {image: require('./images/Russian.jpg'), id:10, title: 'Anastasia'},
    //             {image: require('./images/Thailand.jpg'), id:11, title: 'Kamila'},
    //             {image: require('./images/turkish.webp'), id:12, title: 'Lara'},
    //         ])
    //         }
    //       }, [data])
  
    // const swipe = useRef(new Animated.ValueXY()).current;
    // const panResponser = PanResponder.create({
    //   onMoveShouldSetPanResponder:() => true,
    //   onPanResponderMove:(_, {dx, dy}) =>{
    //     console.log('dx:' + dx + 'dy:' + dy);
    //     swipe.setValue({x: dx, y: dy});
    //   },
  
    //   onPanresponderRelease:(_, {dx, dy})=> {
    //     console.log('released:' + 'dx:' + dx + 'dy:' + dy);
    //     let direction = Math.sign(dx);
    //     let isActionActive = Math.abs(dx) > 200;
    //     if(isActionActive){
    //       Animated.timing(swipe,{
    //         toValue:{x: 500 * dx, y: dy},
    //         useNativeDriver: true,
    //         duration:500,
    //       }).start(removeCard);
    //     } else {
    //       Animated.spring(swipe,{
    //         toValue:{x: 0, y: 0},
    //         useNativeDriver: true,
    //         friction:5,
    //       }).start();
    //     }
        
    //   },
    // });
    // const removeCard = useCallback(() =>{
    //   setData(prepState=> prepState.slice(1));
    //   swipe.setValue({x: 0, y: 0});
    // }, [swipe]);
    // return (
    //   <View style={{flex: 1}}>
    //     {data
    //       .map((item, index) => {
    //         const isFirst = index === 0;
    //         const dragHandlers = isFirst ? panResponder.panHandlers : {};
    //         return (
    //           <TinderCard
    //             swipe={swipe}
    //             item={item}
    //             isFirst={isFirst}
    //             {...dragHandlers}
    //           />
    //         );
    //       })
    //       .reverse()}
    //     <View
    //       style={{
    //         position: 'absolute',
    //         flexDirection: 'row',
    //         width: '100%',
    //         justifyContent: 'space-evenly',
    //         alignItems: 'center',
    //         bottom: 30,
    //         zIndex: -1,
    //       }}>
    //       <TouchableOpacity
    //         style={{
    //           width: 70,
    //           height: 70,
    //           borderRadius: 35,
    //           backgroundColor: '#fff',
    //           elevation: 5,
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //         }}
    //         onPress={() => {
    //           handleChoiceButtons(-1);
    //         }}>
    //         <Image
    //           source={require('../images/cancel.png')}
    //           style={{width: 34, height: 34, tintColor: '#FF0060'}}
    //         />
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         style={{
    //           width: 70,
    //           height: 70,
    //           borderRadius: 35,
    //           backgroundColor: '#fff',
    //           elevation: 5,
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //         }}
    //         onPress={() => {
    //           handleChoiceButtons(1);
    //         }}>
    //         <Image
    //           source={require('../images/heart.png')}
    //           style={{width: 40, height: 40, tintColor: '#00eda6'}}
    //         />
    //       </TouchableOpacity>
    //     </View>
    //   </View>
      // <View style={{flex:1}}>
      //   {data.map((item,index) => {
      //     let isFirst = index === 0;
      //     let dragHandlers = isFirst ? panResponser.panHandlers : {};
      //     return (
      //       <TinderCard 
      //     item={item} 
      //     isFirst={isFirst} 
      //     swipe={swipe} 
      //     {...dragHandlers}
      //     />
      //     );
      //   })
      //   .reverse()}
      // </View>
  //   );
  // };
  
  // export default App;
  
  // const styles = StyleSheet.create({})
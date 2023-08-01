import { View } from 'react-native'
import {useRef, useEffect, React} from 'react'
import Video from 'react-native-video';


const IntroVideoScreen = ({navigation}) => {

  const videoRef = useRef();

  // After 8 seconds it will automatically route to the LandingPage
  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('Home')
    }, 16000)

  },[]);


  return (

    // 1stChoice Intro Video 
    <View style={{flex:1}}>

      <Video source={require('../videos/tinder-ad.mp4')}   
       ref={videoRef}
       controls={false}                                      
       onBuffer={() => {}}                
       onError={() => {}}
       resizeMode={'stretch'}
       repeat={false}           
       style={{
       position: 'absolute',
       top: 0,
       left: 0,
       bottom: 0,
       right: 0,}} />

    </View>

  )
}

export default IntroVideoScreen;


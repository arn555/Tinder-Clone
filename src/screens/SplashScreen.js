import { useEffect, React } from 'react';
import { View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';



function SplashScreen({navigation}) {

 // After 2 seconds it will automatically route to the IntroVideoScreen
  useEffect(() => {

    setTimeout(() => {
      navigation.navigate('IntroVideo')
    }, 2500)

  },[]);
  
  return (

    // Splash Screen Background color blue with 1stchoice Logo
    <View>
        
        <LinearGradient
        colors={['#FF655B', '#FF5864', '#FD297B']}
        style={{
          width: '100%',
          height: '100%',
        }}>
          <Image
          style={{
            position: 'relative',
            top: 350,
            left:75,  
            width: 260, 
            height: 140 }}
          source={require('../images/tinder-logo-3.png')}
        />
          </LinearGradient>
        
    </View>

  );
}

export default SplashScreen;

  
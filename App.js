import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import {LinearGradient} from 'expo-linear-gradient'
export default function App() {
  return (
  <LinearGradient 
  colors={['#4e0329', '#ddb52f']}
  style={styles.rootScreen}>
    <ImageBackground
    source={require('./assets/background_image.jpg')}
    resizeMode="cover"
    style={styles.rootScreen}
    imageStyle={styles.backgroundImage}>
     <StartGameScreen/> 
     </ImageBackground>
  </LinearGradient>
  )
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rootScreen:{
    flex:1,
  
  },

  backgroundImage:{
    opacity:0.15,
  }
});

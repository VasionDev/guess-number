import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import GameOver from './components/GameOver';
import GameScreen from './components/GameScreen';
import Header from './components/Header';
import StartGameScreen from './components/StartGameScreen';
import {useFonts} from 'expo-font'
import AppLoading from 'expo-app-loading';

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [round, setRound] = useState(0)

  let [fontsLoaded] = useFonts({
    'bangers-regular': require('./assets/fonts/Bangers-Regular.ttf'),
    'lucky-guy': require('./assets/fonts/LuckiestGuy-Regular.ttf'),
  });

  const setUserNumberHandler = (number) => {
    setUserNumber(number)
  }

  const roundHandler = (rnd) => {
    setRound(rnd)
  }

  const gameRestartHandler = () => {
    setUserNumber('')
    setRound(0)
  }

  if(!fontsLoaded) {
    return <AppLoading />
  }

  let renderContent = <StartGameScreen onStartGame={setUserNumberHandler}/>
  if(userNumber && !round) {
    renderContent = <GameScreen value={userNumber} onRoundStart={roundHandler}/>
  }else if (round ) {
    renderContent = <GameOver round={round} userNumber={userNumber} onRestartGame={gameRestartHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number"/>
      {renderContent}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

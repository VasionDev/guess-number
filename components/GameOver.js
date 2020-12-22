import React from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import AppButton from './AppButton'


const gameOverImage = 'https://pbs.twimg.com/profile_images/1283323991055306752/bTOBYRov_400x400.jpg'
const backgroundImage = 'https://utemplates.net/wp-content/uploads/2017/07/White-Seamless-Paper-Texture-Background.jpg'

const GameOver = (props) => {
    return (
        <ImageBackground style={styles.background} source={{uri: backgroundImage}}>
            <View style={styles.resultContainer}>
                    <View style={styles.gameOverImageContainer}>
                        <Image style={styles.gameOverImage} source={{uri: gameOverImage}}/>
                    </View>
                    <Text style={styles.text}>Number of rounds the Opponent needs: {props.round}</Text>
                    <Text style={styles.text}>Number is: {props.userNumber}</Text>
                    <View style={styles.buttonContainer}>
                        <AppButton title="Restart Game" onPress={props.onRestartGame}/>
                    </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    resultContainer: {
        flex: 1,
        padding: 20,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        marginVertical: 10,
        fontFamily: 'lucky-guy'
    },
    buttonContainer: {
        marginVertical: 10
    },
    gameOverImageContainer: {
        width: 250,
        height: 250,
        marginVertical: 20
    },
    gameOverImage: {
        width: '100%',
        height: '100%',
        padding: 20
    },
    background: {
        width: '100%',
        height: '100%'
    }
})

export default GameOver

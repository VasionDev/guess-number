import React, {useState} from 'react'
import { Button, StyleSheet, TextInput, View, Text, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import AppButton from './AppButton'
import Card from './Card'
import Number from './Number'

const StartGameScreen = (props) => {

    const [enteredNumber, setEnteredNumber] = useState('')
    const [confirmNumber, setConfirmNumber] = useState()

    const textChangeHandler = (number) => {
        setEnteredNumber(number.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
        setConfirmNumber('')
        Keyboard.dismiss()
    }

    const confirmHandler = () => {
        let number = parseInt(enteredNumber)
        if(isNaN(number) || number <= 0 || number > 100) {
            Alert.alert("Input Alert", "Number has to be the number between 1 to 99", [{text: 'Okay', style:'destructive', onPress:resetInputHandler}])
            return
        }
        setConfirmNumber(number)
        setEnteredNumber('')
        Keyboard.dismiss()

    }

    let confirmContent
    if(confirmNumber) {
        confirmContent =  (<Card style={styles.numberCountainer}>
                                <Text style={styles.fontLuckyGuy}>Your selected number</Text>
                                <Number>{confirmNumber}</Number>
                                <AppButton style={styles.gameStartButton} title="Start Game" onPress={()=>props.onStartGame(confirmNumber)}/>
                            </Card>)
    }

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a new game</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.fontLuckyGuy}>Select a number</Text>
                    <TextInput value={enteredNumber} blurOnSubmit keyboardType='number-pad' autoCapitalize='none' autoCorrect={false} maxLength={2} style={styles.input} onChangeText={textChangeHandler} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonWidth}>
                            <AppButton title="Reset" onPress={resetInputHandler}/>
                        </View>
                        <View style={styles.buttonWidth}>
                            <AppButton title="Confirm" onPress={confirmHandler}/>
                        </View>
                    </View>
                </Card>
                {confirmContent}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 10
    },
    inputContainer: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        fontFamily: 'bangers-regular'
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    buttonWidth: {
        width: 120
    },
    input: {
        width: 50,
        marginVertical: 20,
        borderBottomColor: '#333',
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 20,
        textAlign:'center',
        fontFamily: 'lucky-guy'
    },
    numberCountainer: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gameStartButton: {
        backgroundColor: '#9400D3'
    },
    fontLuckyGuy: {
        fontFamily: 'lucky-guy'
    },
    fontBangersregular:{
        fontFamily: 'bangers-regular',
    }
})

export default StartGameScreen

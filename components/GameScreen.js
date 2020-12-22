import React, {useState, useRef, useEffect} from 'react'
import { Button, StyleSheet, View, Text, Alert } from 'react-native'
import AppButton from './AppButton'
import Number from './Number'

const generateNumberBetween = (min, max, excluded) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    let randNumber = Math.floor(Math.random() * (max-min)) + min
    if(excluded.includes(randNumber)){
        return generateNumberBetween(min, max, excluded)
    }

    return randNumber
}

const GameScreen = (props) => {

    const [currentGuess, setCurrentGuess] = useState(generateNumberBetween(1, 100, [props.value]))
    const [excludedNumber, setExcludedNumber] = useState([currentGuess])

    const [gameRound, setGameRound] = useState(0)

    const minNumber = useRef(1)
    const maxNumber = useRef(100)

    useEffect(()=>{
        if(props.value === currentGuess) {
            props.onRoundStart(gameRound)
        }
    }, [currentGuess])

    const onNumberChangeHandler = (action) => {
        if((action === 'lower' && props.value > currentGuess) || (action === 'greater' && props.value < currentGuess)) {
            Alert.alert('Warning Messsage', 'Do not lie...', [{text:'Okay', style:'cancel'}])
            return
        }else if(action === 'lower') {
            maxNumber.current = currentGuess
        }else {
            minNumber.current = currentGuess
        }
        let newGuess = generateNumberBetween(minNumber.current, maxNumber.current, excludedNumber)
        setCurrentGuess(newGuess)
        setExcludedNumber(currentList=> [...currentList, newGuess])
        setGameRound(currentRound=>currentRound + 1)
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Opponent's Guess</Text>
            <Number>{currentGuess}</Number>
            <View style={styles.buttonContainer}>
                <View style={styles.buttonWidth}>
                    <AppButton title="lower" onPress={() => onNumberChangeHandler('lower')}/>
                </View>
                <View style={styles.buttonWidth}>
                    <AppButton title="greater" onPress={() => onNumberChangeHandler('greater')}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'lucky-guy'
    },
    buttonContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20
    },
    buttonWidth: {
        width: 120
    },
})

export default GameScreen

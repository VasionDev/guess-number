import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Number = (props) => {
    return (
        <Text style={styles.number}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    number: {
        width: 60,
        padding: 10,
        margin: 10,
        backgroundColor: '#f7287b',
        fontSize: 30,
        borderRadius: 10,
        borderColor: '#eee',
        borderWidth: 2,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'lucky-guy'
    }
})

export default Number

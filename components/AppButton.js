import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function AppButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={.6}>
            <View style={{...styles.buttonContainer, ...props.style}}>
                <Text style={styles.button}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#f7287b',
        borderRadius: 15
    },
    button: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'lucky-guy',
        fontSize: 18
    }
})

export default AppButton

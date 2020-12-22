import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        shadowColor: '#ddd',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.4,
        shadowRadius: 10,
        backgroundColor: '#fff',
        elevation: 8,
        marginTop: 20,
        borderRadius: 10
    }
})

export default Card

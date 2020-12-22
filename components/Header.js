import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        padding: 40,
        backgroundColor: '#f7287b',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitle: {
        color: '#000',
        fontSize: 20,
        fontFamily: 'lucky-guy'
    }
})

export default Header

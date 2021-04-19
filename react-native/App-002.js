import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


export default class App extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.f20}>Exercício da aula 002</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    f20: {
        fontSize: 20
    }
})
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Calculator = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Hola</Text>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        textAlign: 'center',
        flex:1

        
    },
    texto:{
        fontSize:24,
        
    }
})

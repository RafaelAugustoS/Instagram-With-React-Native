import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'

const Card = () => {
    return(
        <View style={styles.Container}>
            <Image
                source={{uri: 'https://www.falandodeviagem.com.br/imagens20/UberCanada.jpg'}}
                resizeMode="cover"
                style={styles.Image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        height: 250
    },
    Image: {
        width: '100%',
        height: '100%'
        
    }
})

export { Card }
import React from 'react'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'

const Card = ({picture}) => {
    return(
        <View style={styles.Container}>
            <Image
                source={{uri: picture}}
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
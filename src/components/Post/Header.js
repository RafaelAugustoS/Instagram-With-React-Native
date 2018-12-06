import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ImageProfile } from '@/components'

const Header = () => {
    return(
        <View style={styles.Container}>
            <ImageProfile 
                Size={{width: 30, height: 30}}
            />
            <View style={styles.Name}>
                <Text>rafaelaugusto</Text>
                <Text style={styles.Location}>Toronto, Canada</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        height: 45
    },
    Name: {
        marginLeft: 10
    },
    Location: {
        fontSize: 10
    }
})

export default Header

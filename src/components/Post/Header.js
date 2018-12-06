import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { ImageProfile } from '@/components'
import Play from '@/components/Story/Play'

const Header = ({username, picture, place}) => {
    return(
        <View style={styles.Container}>
            <ImageProfile 
                Picture={picture}
                Size={{width: 30, height: 30}}
            />
            <View style={styles.Name}>
                <Text>{username}</Text>
                <Text style={styles.Location}>{place}</Text>
            </View>
            <Play />
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

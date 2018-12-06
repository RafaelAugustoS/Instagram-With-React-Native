import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Content = () => {
    return(
        <View style={styles.Container}>
            <Text style={styles.Likes}>10 likes</Text>
            <View style={styles.ContainerText}>
                <Text style={styles.Name}>rafaelaugusto</Text>
                <Text style={styles.Text}>The amazing place</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#fff',
        padding: 10
    },  
    Likes: {
        fontWeight: '500',
        fontSize: 13
    },
    Name: {
        fontWeight: '500',
        fontSize: 13
    },
    ContainerText: {
        marginTop: 5,
        flexDirection: 'row'
    },
    Text: {
        marginLeft: 5,
        fontSize: 13
    }
})

export default Content
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Content = ({likes, username, description}) => {
    return(
        <View style={styles.Container}>
            <Text style={styles.Likes}>{likes} likes</Text>
            <View style={styles.ContainerText}>
                <Text style={styles.Name}>{username}</Text>
                <Text style={styles.Text}>{description}</Text>
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
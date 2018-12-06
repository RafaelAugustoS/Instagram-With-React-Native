import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { ImageProfile } from '@/components'

const Item = () => {
    return(
        <View style={styles.Container}>
            <ImageProfile 
                Size={{width: 55, height: 55}}
            />
            <Text style={styles.Name}>rafaelaugusto</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },  
    Name: {
        fontSize: 13
    }
})

export default Item
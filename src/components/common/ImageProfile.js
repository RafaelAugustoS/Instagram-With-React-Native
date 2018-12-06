import React from 'react'
import { 
    View, 
    Image ,
    StyleSheet
} from 'react-native'

const ImageProfile = ({Size}) => {
    return(
        <View style={[styles.Container, {
            width: Size.width,
            height: Size.height
        }]}>
            <Image 
                source={require('@/assets/images/rafael.jpeg')}
                resizeMode="contain"
                style={styles.Image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        borderRadius: 50,
        overflow: 'hidden'
    },  
    Image: {
        width: '100%',
        height: '100%'
    }
})

export { ImageProfile }
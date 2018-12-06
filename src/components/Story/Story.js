import React, { PureComponent } from 'react'
import {
    ScrollView,
    View,
    StyleSheet
} from 'react-native'
import Item from '@/components/Story/Item'

class Story extends PureComponent {
    _story = () => {
        [1].map(item => 
            <Item />
        )
    }

    render(){
        return(
            <View
                style={styles.Story}
            >
                <ScrollView
                    horizontal
                >
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Story: {
        height: 90,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1'
    }
})

export default Story
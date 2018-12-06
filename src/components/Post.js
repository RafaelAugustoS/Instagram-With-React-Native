import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '@/components/Post/Header'
import Content from '@/components/Post/Content'
import { Card } from '@/components'

class Post extends Component {
    render(){
        return(
            <View>
                <Header />
                <Card />
                <Content />
            </View>
        )
    }
}

export default Post
import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '@/components/Post/Header'
import Content from '@/components/Post/Content'
import { Card } from '@/components'

class Post extends Component {
    render(){
        const { user, place, picture, likes, description} = this.props.data

        return(
            <View>
                <Header 
                    username={user.username}
                    place={place}
                    picture={user.picture}
                />

                <Card 
                    picture={picture}
                />

                <Content
                    likes={likes}
                    username={user.username}
                    description={description}
                />
            </View>
        )
    }
}

export default Post
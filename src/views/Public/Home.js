import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux'

import Story from '@/components/Story/Story'
import Post from '@/components/Post'

class Home extends Component {
    static navigationOptions = {
        headerLeft: null,
        headerTitle: (
            <Image 
                source={require('@/assets/images/logo.png')} 
                resizeMode="contain"
                style={{width: 100}}
            />
        )
    }

    componentWillMount(){
        console.log(this.props)
    }

    render(){
        return(
            <View style={styles.Container}>
                <ScrollView>
                    <Story />
                    <Post />
                    <Post />
                    <Post />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    Logo: {
        width: 100
    }
})

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps)(Home)
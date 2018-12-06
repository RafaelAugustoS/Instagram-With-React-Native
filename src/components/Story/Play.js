import React, { Component } from 'react'
import { Modal, Image } from 'react-native'

class Play extends Component {
    render() {
        return (
            <Modal
                visible={false}
            >
                <Image
                    source={{uri: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}
                    resizeMode="cover"
                    style={{width: '100%', height: '100%'}}
                />
            </Modal>
        )
    }
}

export default Play
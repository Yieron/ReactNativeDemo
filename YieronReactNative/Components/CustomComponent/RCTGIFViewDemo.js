import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    UIManager,
    findNodeHandle,
} from 'react-native';

import RCTGIFView from './RCTGIFView';

export default class RCTGIFViewDemo extends Component {
    constructor(props) {
        super(props);

        console.log('YINDONG_RCTGIFViewDemo');
        
        this.state = {
            isPlaying: true,
            image: '图片地址',
            gifImage: '',
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <RCTGIFView
                    imageName={this.state.image}
                    ref='RCTImageView'
                    style={styles.gifImage}
                    playStatus={this.state.isPlaying}
                    imageName={this.state.gifImage}
                    onClick={(msg) => alert('原生层传递的数据为：', msg)}
                />
            </View>
        );
    }

    sendNotification() {
        //向native层发送命令
        UIManager.dispatchViewManagerCommand(
            findNodeHandle(this.refs.RCTImageView),
            UIManager.RCTImageView.Commands.handleTask, // Commands后面的值与原生层定义的HANDLE_METHOD_NAME一致
            [name] // 向原生层传递的参数数据,数据形如：["第一个参数","第二个参数",3]
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gifImage: {
        width: 300,
        height: 200
    },
    controller: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        marginHorizontal: 30
    }
});
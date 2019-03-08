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

let GIF_IMAGE_ARRAY = [
    'https://cimili-cdn-gif-of-track.cimili.com/v2_gif_266_6967.gif',
    'https://cimili-cdn-gif-of-track.cimili.com/v2_gif_505_13547.gif'
];
export default class RCTGIFViewDemo extends Component {
    constructor(props) {
        super(props);

        console.log('YINDONG_RCTGIFViewDemo');
        this.index = 0;

        this.state = {
            isPlaying: true,
            image: '图片地址',
            gifImage: GIF_IMAGE_ARRAY[this.index]
        }
    }


    render() {

        return (
            <View style={styles.container}>
                <RCTGIFView
                    style={styles.gifImage}
                    playStatus={this.state.isPlaying}
                    imageName={this.state.gifImage}
                />
                <View style={styles.controller}>
                    <Text
                        style={styles.btn}
                        onPress={() => this.playGif()}>
                        播放
                    </Text>
                    <Text
                        style={styles.btn}
                        onPress={() => this.stopGif()}>
                        暂停
                    </Text>
                    <Text
                        style={styles.btn}
                        onPress={() => this.changeGifImage()}>
                        切换
                    </Text>
                </View>
            </View >
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

    changeGifImage() {
        if (this.index) {
            this.index = 0;
            this.setState({
                isPlaying: true,
                gifImage: GIF_IMAGE_ARRAY[this.index]
            })
        } else {
            this.index = 1;
            this.setState({
                isPlaying: true,
                gifImage: GIF_IMAGE_ARRAY[this.index]
            })
        }

    }

    /**
     * 播放
     */
    playGif() {
        this.setState({ isPlaying: true })
    }

    /**
     * 暂停
     */
    stopGif() {
        this.setState({ isPlaying: false })
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
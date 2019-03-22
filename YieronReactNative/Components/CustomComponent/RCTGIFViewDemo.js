import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    UIManager,
    findNodeHandle,
    Button,
    Image,
} from 'react-native';
import LogoTitle from '../LogoTitle';

import RCTGIFView from './RCTGIFView';
import { YieronColor } from '../../constants/YieronColor';

let GIF_IMAGE_ARRAY = [
    'https://cimili-cdn-gif-of-track.cimili.com/v2_gif_266_6967.gif',
    'https://cimili-cdn-gif-of-track.cimili.com/v2_gif_505_13547.gif'
];
export default class RCTGIFViewDemo extends Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         headerTitle: <LogoTitle />,
    //         headerRight: (
    //             <Button
    //                 onPress={() => {
    //                     let count = navigation.getParam('increaseCount') ? navigation.getParam('increaseCount') : 0;
    //                     count++;
    //                     alert(count)
    //                 }
    //                 }
    //                 title="+1"
    //                 color={YieronColor.colorBlue}
    //             />
    //         ),
    //     };
    // };

    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../assets/img/origin_heart.jpeg')}
                style={[{ width: 24, height: 24, }, { tintColor: tintColor }]}
            />
        ),
    };

    constructor(props) {
        super(props);

        console.log('YINDONG_RCTGIFViewDemo');
        this.index = 0;

        this.state = {
            isPlaying: true,
            image: '图片地址',
            gifImage: GIF_IMAGE_ARRAY[this.index],
            count: 0,
        }
    }

    componentDidMount() {
        const parent = this.props.navigation.dangerouslyGetParent();
        const isDrawerOpen = parent && parent.state && parent.state.isDrawerOpen;
        console.log('YINDONG_isDrawerOpen', isDrawerOpen);
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
                <View style={styles.controller}>
                    <Text
                        style={styles.btn}
                        onPress={() => this.openDrawer()}>
                        打开抽屉
                    </Text>
                    <Text
                        style={styles.btn}
                        onPress={() => this.closeDrawer()}>
                        关闭抽屉
                    </Text>
                    <Text
                        style={styles.btn}
                        onPress={() => this.toggleDrawer()}>
                        切换抽屉
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

    openDrawer() {
        this.props.navigation.openDrawer();
    }

    closeDrawer() {
        this.props.navigation.closeDrawer();
    }

    toggleDrawer(){
        this.props.navigation.toggleDrawer();
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
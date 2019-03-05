import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    Platform,
    Button,
    TouchableHighlight,
    SnapshotViewIOS,
    AsyncStorage,
    ToastAndroid,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";
import YieronNetUtil from '../../utils/YieronNetUtil';

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
class SnapshotViewIOSDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        console.log('YINDONG-componentWillMount');
    }

    render() {
        console.log('YINDONG-render');

        return (
            <View style={styles.container}>
                <SnapshotViewIOS
                    onSnapshotReady={console.log('YINDONG_onSnapshotReady')}
                    testIdentifier='屏幕快照'
                    style={{ backgroundColor: "green", flex: 1 }}
                >
                    <Text>我是屏幕快照</Text>
                    <View style={{ backgroundColor: "blue", flex: 0.3 }} />
                    <View style={{ backgroundColor: "red", flex: 0.5 }} />
                </SnapshotViewIOS>

            </View>
        )
    }

    componentDidMount() {
        console.log('YINDONG-componentDidMount');
        //加载数据
        var url = 'http://192.168.2.112:8042/ShengDaAutoPlatform/remit!clerkDetail';
        var service = "clerkDetail";
        var userInfo;
        AsyncStorage.getItem("userInfo", (error, result) => {
            if (error) {

            } else {
                userInfo = eval('(' + result + ')');
                var params = "service=clerkDetail&pageSize=10&page=1&userId=" + '';
                YieronNetUtil.post(url, service, params, (result) => {
                    ToastAndroid.show(result.resultDesc, ToastAndroid.SHORT);
                });
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        console.log('YINDONG-componentWIllReceiveProps', nextProps);

    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('YINDONG-shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate() {
        console.log('YINDONG-componentWillUpdate');

    }

    //在componentWillUpdate()和componentDidUpdate()方法中间，会执行render()，重新渲染界面

    componentDidUpdate() {
        console.log('YINDONG-componentDidUpdate');
        // if (prevProps.isFocused !== this.props.isFocused) {
        //     // Use the `this.props.isFocused` boolean
        //     // Call any action
        // }
    }

    componentWillUnmount() {
        console.log('YINDONG-componentWillUnmount');

    }
}

export default withNavigationFocus(SnapshotViewIOSDemo);
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    separator: {
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    wrapper: {
        ...StyleSheet.absoluteFill,
        top: 10,
        backgroundColor: 'transparent',
    },
});
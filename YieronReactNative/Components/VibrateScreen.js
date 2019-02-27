/**
 * 该界面作为初始化界面，每个界面都从该界面复制黏贴
 * TODO
 * 将所有必用的1：方法，2：样式，3：控件，4：生命周期   都集中起来。
 */
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    Platform,
    Button,
    Vibration,
    TouchableHighlight,
    ToastAndroid,
    PixelRatio,
    PermissionsAndroid,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
const DURATION = 10000;
const PATTERN = [1000, 2000, 3000];

class VibrateScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        console.log('YINDONG-componentWillMount');
        console.log('YINDONG_PixelRatio', PixelRatio.get(), PixelRatio.getFontScale(), PixelRatio.getPixelSizeForLayoutSize());
        this.requestCameraPermission();
    }

    render() {
        console.log('YINDONG-render');
        ToastAndroid.show("show Toast Android", ToastAndroid.SHORT);

        return (
            <View style={styles.container}>
                <NativeTouchable>
                    <Text>Yieron</Text>
                </NativeTouchable>

                <Button
                    title="Vibrate"
                    onPress={() => {
                        Vibration.vibrate(DURATION)
                        // Android: vibrate for 10s
                        // iOS: duration is not configurable, vibrate for fixed time (about 500ms)

                        Vibration.vibrate(PATTERN)
                        // Android: wait 1s -> vibrate 2s -> wait 3s
                        // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate

                        Vibration.vibrate(PATTERN, true)
                        // Android: wait 1s -> vibrate 2s -> wait 3s -> wait 1s -> vibrate 2s -> wait 3s -> ...
                        // iOS: wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> wait 1s -> vibrate -> wait 2s -> vibrate -> wait 3s -> vibrate -> ...

                        ToastAndroid.showWithGravity(
                            "Start Vibrate",
                            ToastAndroid.SHORT,
                            ToastAndroid.CENTER
                        );
                    }}
                />
                <Button
                    title="CancleVibrate"
                    onPress={() => {
                        Vibration.cancel()
                        // Android: vibration stopped
                        // iOS: vibration stopped  
                        ToastAndroid.showWithGravityAndOffset(
                            "Vibrate cancle",
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM,
                            25,
                            50
                        );
                    }}
                />
            </View>
        )
    }

    componentDidMount() {
        console.log('YINDONG-componentDidMount');
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


    async requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_SMS,
                {
                    title: '申请摄像头权限',
                    message:
                        '一个很牛逼的应用想借用你的摄像头，' +
                        '然后你就可以拍出酷炫的皂片啦。',
                    buttonNeutral: '等会再问我',
                    buttonNegative: '不行',
                    buttonPositive: '好吧',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('现在你获得摄像头权限了');
            } else {
                console.log('用户并不屌你');
            }
        } catch (err) {
            console.warn(err);
        }
    }
}

export default withNavigationFocus(VibrateScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
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
    TouchableHighlight,
    BackHandler,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
class BackHandlerDemo extends Component {
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
                <NativeTouchable>
                    <Text>Yieron</Text>
                </NativeTouchable>
            </View>
        )
    }

    componentDidMount() {
        console.log('YINDONG-componentDidMount');
        // BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            // this.goBack(); // works best when the goBack is async
            BackHandler.exitApp();  //退出程序
            return true;
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
        this.backHandler.remove();

        // BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        let backTimer = 0;
        let backPressTimes = 0;
        let exitTimerDuration = 1000;

        console.log('YINDONG_handleBackPress');
        if (backPressTimes >= 1) {
            return false;
        }
        backPressTimes++;
        clearTimeout(backTimer);
        backTimer = setTimeout(() => {
            backPressTimes = 0;
        }, exitTimerDuration);
        // this.goBack(); // works best when the goBack is async
        return true;
    }
}

export default withNavigationFocus(BackHandlerDemo);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
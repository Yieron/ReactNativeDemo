/**
 *  setTimeout, clearTimeout
 *  setInterval, clearInterval
 *  setImmediate, clearImmediate
 *  requestAnimationFrame, cancelAnimationFrame
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
    InteractionManager,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
class InteractionManagerDemoScreen extends Component {
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
        InteractionManager.runAfterInteractions(() => {
            //执行耗时的同步任务
            console.log('YINDONG_InteractionManager');
        });

        let handle = InteractionManager.createInteractionHandle();
        //执行动画 (`runAfterInteractions` tasks are queued)

        //动画执行结束

        InteractionManager.clearInteractionHandle(handle);
        //动画清除之后，开始直接runAfterInteractions中的任务
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

export default withNavigationFocus(InteractionManagerDemoScreen);
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
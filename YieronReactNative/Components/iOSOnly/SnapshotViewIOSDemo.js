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
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

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
                >
                    <Text>我是屏幕快照</Text>
                </SnapshotViewIOS>
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
}

export default withNavigationFocus(SnapshotViewIOSDemo);
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
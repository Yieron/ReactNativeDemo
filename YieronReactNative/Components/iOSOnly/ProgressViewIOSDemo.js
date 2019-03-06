
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    Platform,
    Button,
    TouchableHighlight,
    ProgressViewIOS,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
class ProgressViewIOSDemo extends Component {
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
            <View>
                <Text style={styles.welcome}>ProgressViewIOS使用实例</Text>
                <ProgressViewIOS style={styles.progressView} progress={0.3} />
                <ProgressViewIOS style={styles.progressView} progressTintColor="purple" progress={0.2} />
                <ProgressViewIOS style={styles.progressView} progressTintColor='red' trackTintColor='black' progress={0.4} />
                <ProgressViewIOS style={styles.progressView} progressTintColor="orange" progress={0.6} />
                <ProgressViewIOS style={styles.progressView} progressTintColor="yellow" progress={0.8} />
                <ProgressViewIOS style={styles.progressView} progressTintColor='red' progressViewStyle='bar' progress={0.5} />
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

export default withNavigationFocus(ProgressViewIOSDemo);
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
    progressView: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    }
});
/**
 * TODO
 * 准备自定义组件，从Text开始
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
    Switch,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})

class TextDemo extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('count')
    });

    constructor(props) {
        super(props);
        this.state = {
            turnOn: true,
        }
    }

    componentWillMount() {
        console.log('YINDONG-componentWillMount');
    }

    render() {
        console.log('YINDONG-render', this.props.navigation.getParam('count'));

        return (
            <View style={styles.container}>
                <NativeTouchable>
                    <Text>Yieron</Text>
                </NativeTouchable>
                <Switch
                    style={{ marginTop: 60 }}
                    //动态改变value
                    value={this.state.turnOn}
                    //当切换开关室回调此方法
                    onValueChange={(value) => {
                        console.log('YINDONG_value', value);

                        this.setState({ turnOn: value })
                    }
                    }

                >
                </Switch>
                <Text>
                    {this.props.navigation.getParam('count')}
                </Text>
            </View >
        )
    }

    componentDidMount() {
        console.log('YINDONG-componentDidMount');
        const { navigation } = this.props;
        this.focusListener = navigation.addListener("didFocus", () => {
            // The screen is focused
            // Call any action
            console.log('YINDONG-didFocus');
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

    componentDidUpdate(prevProps) {
        console.log('YINDONG-componentDidUpdate');
        if (prevProps.isFocused !== this.props.isFocused) {
            // Use the `this.props.isFocused` boolean
            // Call any action
            console.log('prevProps.isFocused !== this.props.isFocused');
        }
    }

    componentWillUnmount() {
        console.log('YINDONG-componentWillUnmount');
        this.focusListener.remove();

    }
}

export default withNavigationFocus(TextDemo);
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
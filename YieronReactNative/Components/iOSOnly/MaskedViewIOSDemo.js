/**
 * 渲染一个带蒙版的视图。蒙版元素在maskElement这个 prop 中指定。
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
    MaskedViewIOS,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
class MaskedViewIOSDemo extends Component {
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
            // 决定蒙版的形状
            <MaskedViewIOS
                style={{ flex: 1, flexDirection: 'row', height: '100%' }}
                maskElement={
                    <View style={{
                        // 蒙版的效果与其本身透明度相反。先设置整个背景透明，表示完全盖住蒙版底下的元素，不显示出来。
                        backgroundColor: 'transparent',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 60,
                            // 文字不透明，表示文字部分盖住的元素会显示出来。
                            color: 'black',
                            fontWeight: 'bold',
                        }}>
                            Basic Mask
                        </Text>
                    </View>
                }
            >
                { /* 被盖在蒙版之下的元素。可以放置任意元素，例如图片等。 */}
                <View style={{ flex: 1, height: '100%', backgroundColor: '#324376' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#F5DD90' }} />
                <View style={{ flex: 1, height: '100%', backgroundColor: '#F76C5E' }} />
            </MaskedViewIOS>
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

export default withNavigationFocus(MaskedViewIOSDemo);
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
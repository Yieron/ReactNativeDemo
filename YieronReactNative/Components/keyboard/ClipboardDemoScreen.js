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
    Clipboard,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
class ClipboardDemoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { textFromClipboard: '' };
    }

    componentWillMount() {
        console.log('YINDONG-componentWillMount');
    }

    render() {
        console.log('YINDONG-render');

        return (
            <View style={styles.container}>
                <View style={styles.flexDirection}>
                    <Text style={styles.buttonStyle} onPress={this.copyToClipBoard.bind(this)}>
                        存入剪贴板
                </Text>
                    <Text style={styles.buttonStyle} onPress={this.pasteFromClipboard.bind(this)}>
                        读取剪贴板
                </Text>
                </View>
                <Text style={styles.info}>
                    {this.state.textFromClipboard}
                </Text>
            </View>
        );

    }

    componentDidMount() {
        console.log('YINDONG-componentDidMount');
        this._getContent();
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

    async _getContent() {
        let content = await Clipboard.getString();
        console.log('YINDONG_content', content);

    }

    _setContent() {
        Clipboard.setString('hello world');
    }

    //从剪贴板中读取字符串
    pasteFromClipboard() {
        Clipboard.getString().then(
            (textFromClipboard) => {
                this.setState({ textFromClipboard });
            }
        ).catch(
            (error) => {
                console.log("从剪贴板中读取数据错误!");
                console.log(error);
            }
        );
    }

    //向剪贴板中存入字符串
    copyToClipBoard() {
        Clipboard.setString('我是黏贴板内容');
    }
}

export default withNavigationFocus(ClipboardDemoScreen);
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
    flexDirection: {
        flexDirection: 'row'
    },
    buttonStyle: {
        textAlign: 'center',
        color: 'white',
        margin: 10,
        backgroundColor: '#4CA300',
        width: 140,
        fontSize: 23
    },
    info: {
        fontSize: 20,
        margin: 10
    },
});
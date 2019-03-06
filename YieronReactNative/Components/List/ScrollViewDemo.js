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
    ScrollView,
    RefreshControl,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
class ScrollViewDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,

        }
    }

    componentWillMount() {
        console.log('YINDONG-componentWillMount');
    }

    render() {
        console.log('YINDONG-render');

        return (
            <ScrollView
                style={styles.container}
                keyboardDismissMode={'interactive'}
                keyboardShouldPersistTaps={'handled'}
                scrollEnabled={true}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        progressBackgroundColor={'green'}
                        title={'下拉刷新'}
                        titleColor={'red'}
                    />
                }
            >
                <View>
                    <NativeTouchable>
                        <Text>Yieron</Text>
                    </NativeTouchable>
                </View>
            </ScrollView >
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

    _onRefresh = () => {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({
                refreshing: false
            });
        }, 2000);
    }
}

export default withNavigationFocus(ScrollViewDemo);
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
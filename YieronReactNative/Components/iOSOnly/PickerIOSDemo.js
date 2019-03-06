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
    PickerIOS,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
var PickerItemIOS = PickerIOS.Item;
var COURSE_ITEMS = ['C++', 'Java', 'Android', 'iOS', 'React Native', 'Swift', '.Net'];
class PickerIOSDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: 'Java',
            selectedIndex: 1,
        }
    }

    componentWillMount() {
        console.log('YINDONG-componentWillMount');
    }

    render() {
        console.log('YINDONG-render');

        return (
            <View>
                <NativeTouchable>
                    <Text>Yieron</Text>
                </NativeTouchable>
                <PickerIOS
                    itemStyle={{ fontSize: 25, color: 'red', textAlign: 'center', fontWeight: 'bold' }}
                    selectedValue={this.state.selectedCourse}
                    onValueChange={(selectedCourse, selectedIndex) => this.setState({ selectedCourse, selectedIndex })}>
                    <PickerItemIOS
                        key='0'
                        value='C++'
                        label='C++'
                    />
                    <PickerItemIOS
                        key='1'
                        value='Java'
                        label='Java'
                    />
                    <PickerItemIOS
                        key='2'
                        value='Android'
                        label='Android'
                    />
                    <PickerItemIOS
                        key='3'
                        value='iOS'
                        label='iOS'
                    />
                    <PickerItemIOS
                        key='4'
                        value='React Native'
                        label='React Native'
                    />
                    <PickerItemIOS
                        key='5'
                        value='Swift'
                        label='Swift'
                    />
                    <PickerItemIOS
                        key='5'
                        value='.Net'
                        label='.Net'
                    />
                </PickerIOS>
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

export default withNavigationFocus(PickerIOSDemo);
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
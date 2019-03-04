import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    Platform,
    Button,
    TouchableHighlight,
    AsyncStorage,
} from 'react-native';
import { withNavigationFocus } from "react-navigation";

const NativeTouchable = Platform.select({
    ios: TouchableHighlight,
    android: TouchableNativeFeedback,
})
class AsyncStorageDemo extends Component {
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
        this._retrieveData();
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

    //保存数据
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {
            // Error saving data
        }
    }

    //读取数据
    _retrieveData = async () => {
        try {
            let value = await AsyncStorage.getItem('TASKS');
            console.log('YINDONG:value', value);
            if (value !== null) {
                // We have data!!
            }
        } catch (error) {
            // Error retrieving data
        }
    }

    _mergeItem = async () => {
        try {
            let UID123_object = {
                name: "Chris",
                age: 30,
                traits: { hair: "brown", eyes: "brown" }
            };
            // 只需定义新增或是修改的数据
            let UID123_delta = {
                age: 31,
                traits: { eyes: "blue", shoe_size: 10 }
            };

            AsyncStorage.setItem("UID123", JSON.stringify(UID123_object), () => {
                AsyncStorage.mergeItem("UID123", JSON.stringify(UID123_delta), () => {
                    AsyncStorage.getItem("UID123", (err, result) => {
                        console.log(result);
                    });
                });
            });
        } catch (error) {

        }
    }

    _multiMergeItem = async () => {
        try {
            // 第一个用户的初始数据
            let UID234_object = {
                name: "Chris",
                age: 30,
                traits: { hair: "brown", eyes: "brown" }
            };

            // 第一个用户的增量数据
            let UID234_delta = {
                age: 31,
                traits: { eyes: "blue", shoe_size: 10 }
            };

            // 第二个用户的初始数据
            let UID345_object = {
                name: "Marge",
                age: 25,
                traits: { hair: "blonde", eyes: "blue" }
            };

            // 第二个用户的增量数据
            let UID345_delta = {
                age: 26,
                traits: { eyes: "green", shoe_size: 6 }
            };

            let multi_set_pairs = [
                ["UID234", JSON.stringify(UID234_object)],
                ["UID345", JSON.stringify(UID345_object)]
            ];
            let multi_merge_pairs = [
                ["UID234", JSON.stringify(UID234_delta)],
                ["UID345", JSON.stringify(UID345_delta)]
            ];

            AsyncStorage.multiSet(multi_set_pairs, err => {
                AsyncStorage.multiMerge(multi_merge_pairs, err => {
                    AsyncStorage.multiGet(["UID234", "UID345"], (err, stores) => {
                        stores.map((result, i, store) => {
                            let key = store[i][0];
                            let val = store[i][1];
                            console.log(key, val);
                        });
                    });
                });
            });

            // Console log results:
            // => UID234 {"name":"Chris","age":31,"traits":{"shoe_size":10,"hair":"brown","eyes":"blue"}}
            // => UID345 {"name":"Marge","age":26,"traits":{"shoe_size":6,"hair":"blonde","eyes":"green"}}
        } catch (error) {

        }
    }
}

export default withNavigationFocus(AsyncStorageDemo);
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
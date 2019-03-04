import React, { Component } from 'react';
import {
    View,
    Button,
    ToastAndroid,
    StyleSheet,
} from 'react-native';

// a component that calls the imperative ToastAndroid API
const Toast = (props) => {
    if (props.visible) {
        ToastAndroid.showWithGravityAndOffset(
            props.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
            25,
            50
        );
        return null;
    }
    return null;
};

export default class ToastAndroidScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    handleButtonPress = () => {
        this.setState({
            visible: true,
        }, () => {
            this.hideToast();
        });
    };
    hideToast = () => {
        this.setState({
            visible: false
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Toast
                    visible={this.state.visible}
                    message="Example"
                />
                <Button title="Toggle Modal" onPress={this.handleButtonPress} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
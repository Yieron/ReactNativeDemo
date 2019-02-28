import React, { Component } from 'react';
import { Keyboard, TextInput, StyleSheet } from 'react-native';

export default class KeyboardDemoScreen extends Component {
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow() {
        alert('Keyboard Shown');
    }

    _keyboardDidHide() {
        alert('Keyboard Hidden');
    }

    render() {
        return (
            <TextInput
                onSubmitEditing={Keyboard.dismiss}
            />
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
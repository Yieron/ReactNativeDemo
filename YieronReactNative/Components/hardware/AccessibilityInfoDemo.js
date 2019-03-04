import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    Platform,
    Button,
    TouchableHighlight,
    Alert,
    ActionSheetIOS,
    AccessibilityInfo,
} from 'react-native';

export default class AccessibilityInfoDemo extends React.Component {
    state = {
        screenReaderEnabled: false
    };

    componentDidMount() {
        AccessibilityInfo.addEventListener(
            "change",
            this._handleScreenReaderToggled
        );
        AccessibilityInfo.fetch().then(isEnabled => {
            this.setState({
                screenReaderEnabled: isEnabled
            });
        });
    }

    componentWillUnmount() {
        AccessibilityInfo.removeEventListener(
            "change",
            this._handleScreenReaderToggled
        );
    }

    _handleScreenReaderToggled = isEnabled => {
        this.setState({
            screenReaderEnabled: isEnabled
        });
    };

    render() {
        return (
            <View>
                <Text>
                    The screen reader is{" "}
                    {this.state.screenReaderEnabled ? "enabled" : "disabled"}.
                </Text>
            </View>
        );
    }
}
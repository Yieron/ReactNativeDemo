import React from "react";
import {
    BackHandler,
    View,
    Text,
    Button,
} from "react-native";

export default class ScreenWithCustomBackBehavior extends React.Component {
    _didFocusSubscription;
    _willBlurSubscription;

    constructor(props) {
        super(props);
        this._didFocusSubscription = props.navigation.addListener('didFocus', payload =>
            BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }

    componentDidMount() {
        this._willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
            BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid)
        );
    }

    onBackButtonPressAndroid = () => {
        if (this.isSelectionModeEnabled()) {
            this.disableSelectionMode();
            return true;
        } else {
            return false;
        }
    };

    componentWillUnmount() {
        this._didFocusSubscription && this._didFocusSubscription.remove();
        this._willBlurSubscription && this._willBlurSubscription.remove();
    }

    render() {
        return (<View>
            <Text>带返回的界面</Text>
            <Button title="Back" onPress={() => { this.props.navigation.goBack() }} />
        </View>)
    }
}

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';

class reduxRootScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
            <Text>reduxRootScreen</Text>
        </View>)
    }
}

export default reduxRootScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
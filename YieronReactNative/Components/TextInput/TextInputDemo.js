import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text, } from 'react-native';

export default class TextInputDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 0 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                    editable={true}
                    multiline={true}
                    numberOfLines={4}
                    allowFontScaling={true}
                    autoCapitalize={"none"}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

})


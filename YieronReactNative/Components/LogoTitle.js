import React, { Component } from 'react';
import {
    Image,
} from 'react-native';

export default class LogoTitle extends Component {
    render() {
        return (
            <Image
                source={require('../assets/img/origin_heart.jpeg')}
                style={{ width: 30, height: 30 }}
            />
        );
    }
}


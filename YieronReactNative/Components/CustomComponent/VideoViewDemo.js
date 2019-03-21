import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import VideoView from './VideoView';

export default class VideoViewDemo extends Component {
    static navigationOptions = ({ navigation, navigationOptions }) => {
        const { params } = navigation.state;
        console.log('YINDONG_params', params);

        return {
            title: params ? params.title : 'A Nested Details Screen',
            /* These values are used instead of the shared configuration! */
            headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                <VideoView
                    style={{ height: 250, width: 380 }}
                    source={
                        {
                            url: 'http://qiubai-video.qiushibaike.com/A14EXG7JQ53PYURP.mp4',
                            headers: {
                                'refer': 'myRefer'
                            }
                        }
                    }
                />
            </View>
        );
    }
}
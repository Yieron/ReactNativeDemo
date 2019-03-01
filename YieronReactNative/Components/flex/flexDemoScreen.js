import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
const { scale, height, width, fontScale } = Dimensions.get('window');

export default class flexDemoScreen extends Component {
    render() {
        console.log('YINDONG_Dimensions:', Dimensions.get('window'));
        console.log('YINDONG_Screen',Dimensions.get('screen'));
        
        return (
            <View style={styles.container}>
                <View style={styles.viewItem1}>
                </View>
                <View style={styles.viewItem2}>
                </View>
                <View style={styles.viewItem3}>
                </View>
                <View style={{ flex: 2, backgroundColor: '#bbceee', flexDirection: 'row' }}></View>
            </View>
        );
    }
}

/**
 * row横排
 * column列纵
 * justifyContent是主轴方向居中
 * alignItems是次轴方向居中
 */

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewItem1: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#FF33CC'
    },
    viewItem2: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        marginTop: 15,
        backgroundColor: '#00FFFF'
    },
    viewItem3: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#CCBBFF'
    },
    viewItem3Child1: {
        flex: 1,
        backgroundColor: '#00ffbb'
    },
    viewItem3Child2: {
        flex: 1,
        backgroundColor: '#aabbdd'
    },
    viewItem3Child3:
    {
        flex: 1,
        backgroundColor: '#0000ff'
    }
});
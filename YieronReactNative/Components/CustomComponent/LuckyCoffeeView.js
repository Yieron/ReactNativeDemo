import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
} from 'react-native';
import LeftFlatListView from './LeftFlatListView';
import RightSectionListView from './RightSectionListView';
import DataSource from './DataSource.json';

export default class LuckyCoffeeView extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        console.log('====================================');
        console.log('YINDONG_DataSource', DataSource);
        console.log('====================================');

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <LeftFlatListView dataSource={DataSource.food_spu_tags} />
                    <RightSectionListView dataSource={DataSource.food_spu_tags} />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
})
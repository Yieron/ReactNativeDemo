import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    SectionList,
} from 'react-native';

class RightSectionListView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.props.dataSource}
                    renderItem={(item) => this._renderItem(item)}
                />
            </View>
        )
    }

    _renderItem(item) {
        console.log('====================================');
        console.log('YINDONG_SectionListView',item);
        console.log('====================================');
        return <Text>
            {item.item.name}
        </Text>
    }
}

export default RightSectionListView;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
})
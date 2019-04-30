import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
} from 'react-native';

class LeftFlatListView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.dataSource}
                    renderItem={(item)=>this._renderItem(item)}
                />
            </View>
        )
    }

    _renderItem(item){
        console.log('====================================');
        console.log('YINDONG_item',item);
        console.log('====================================');
        return <Text>
            {item.item.title}
        </Text>
    }
}

export default LeftFlatListView;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
})
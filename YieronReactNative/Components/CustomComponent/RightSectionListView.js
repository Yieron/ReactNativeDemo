import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SectionList,
    Dimensions,
    DeviceEventEmitter,
    ScrollView
} from 'react-native';
import LuckyCoffeeItem from './LuckyCoffeeItem';

var { width, height } = Dimensions.get('window');
var sectionData = []
export default class RightSectionListView extends Component {
    // 构造
    constructor(props) {
        super(props);
        sectionData = this.props.dataSource.food_spu_tags
        this.state = {
            sectionData: sectionData
        };
    }

    render() {
        return (
            <SectionList
                ref='sectionList'
                style={{ width: width - 80 }}
                renderSectionHeader={(section) => this.sectionComp(section)} //头
                stickySectionHeadersEnabled={true}  //设置区头是否悬浮在屏幕顶部,默认是true
                renderItem={(item) => this.renderItem(item)} //行
                ItemSeparatorComponent={() => { return (<View style={{ height: 1, backgroundColor: 'black' }} />) }}//分隔线
                sections={this.state.sectionData} //数据
                onViewableItemsChanged={(info) => this.itemChange(info)}  //滑动时调用
            />
        );
    }

    componentDidMount() {
        //收到监听
        this.listener = DeviceEventEmitter.addListener('left', (e) => {
            // SectionList实现scrollToIndex需要修改VirtualizedSectionList和SectionList源码
            if (e > 0) {
                //计算出前面有几行
                var count = 0
                for (var i = 0; i < e; i++) {
                    let countCurrent = sectionData[i].data.length;
                    count += countCurrent;
                }
                count = count + e + e;

                this.refs.sectionList.scrollToIndex({ animated: true, index: count })
            } else {
                this.refs.sectionList.scrollToIndex({ animated: true, index: 0 })  //如果左边点击第一行,右边则回到第一行
            }
        });
    }

    componentWillUnmount() {
        // 移除监听
        this.listener.remove();
    }

    //行
    renderItem = (item) => {
        return (
            <LuckyCoffeeItem
                textValue={item.item.name}
            />
        )
    }
    //头
    sectionComp = (section) => {
        return (
            <View style={{ height: 60, backgroundColor: '#DEDEDE', justifyContent: 'center', alignItems: 'center' }}>
                <Text >{section.section.title}</Text>
            </View>
        )
    }

    itemChange = (info) => {
        let title = info.viewableItems[0].item.title
        var reg = new RegExp("^[0-9]*$");
        if (reg.test(title)) {
            DeviceEventEmitter.emit('right', title); //发监听
        }
    }
}
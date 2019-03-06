import React, { Component } from 'react';
import { StyleSheet, Text, View, SectionList, Dimensions } from 'react-native';   //引入js文件

var { width } = Dimensions.get('window');

export default class SectionListDemo extends Component {
    constructor(props) { //构造器
        super(props);
        this.state = {
            refreshing: false,  //是否刷新,通过更改此属性来控制是否刷新
            sections: [   //数据源
                { key: "A", data: [{ title: "啊是啊" }, { title: "阿玛尼" }, { title: "爱你" }] },
                { key: "B", data: [{ title: "婊子" }, { title: "贝贝" }, { title: "表弟" }, { title: "表姐" }, { title: "表叔" }] },
                { key: "C", data: [{ title: "陈鑫" }, { title: "吃点饭是" }] },
                { key: "D", data: [{ title: "大哥" }, { title: "地方" }, { title: "大大" }, { title: "大鸡鸡" }, { title: "大屌" }, { title: "大屌me干嘛" }] },
            ]
        };
    }
    /*刷新*/
    refresh() {
        this.setState({
            refreshing: true,
        });
        setTimeout(() => {  //通过定时器来模拟刷新
            this.setState({
                refreshing: false,
            });
        }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1, }}>
                <SectionList
                    style={{ marginTop: 20, width: width }}
                    renderSectionHeader={this._sectionComp} //区头
                    renderItem={this._renderItem}   //cell
                    sections={this.state.sections}     //数据源
                    ItemSeparatorComponent={() => <View style={{ backgroundColor: 'red', height: 1 }}></View>}  //分割线
                    stickySectionHeadersEnabled={false}  //设置区头是否悬浮在屏幕顶部,默认是true
                    ListEmptyComponent={() => <Text>没有数据哦</Text>} // 数据为空时调用
                    initialNumToRender={2} //指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容
                    onEndReachedThreshold={0.001}  //0.5表示距离内容最底部的距离为当前列表可见长度的一半时触发。
                    onEndReached={() => { alert(123) }}  //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
                    setVerticalScrollBarEnabled={false}
                    setFastScrollEnabled={false}
                    refreshing={this.state.refreshing} // 是否刷新 ，自带刷新控件
                    keyExtractor={(item, index) => item + index}
                    onRefresh={() => {
                        this.refresh();
                    }} // 刷新方法,写了此方法，下拉才会出现  刷新控件，使用此方法必须写 refreshing
                    ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff', lineHeight: 30 }}>通讯录</Text></View>}
                    ListFooterComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff', lineHeight: 30 }}>通讯录尾部</Text></View>}
                />
            </View>
        );
    }
    _renderItem = (info) => {
        var txt = '  ' + info.item.title;   //取到数据源中的title
        return <Text
            style={{ height: 60, lineHeight: 60, textAlign: 'center', backgroundColor: "#ffffff", color: '#5C5C5C', fontSize: 15 }}>{txt}</Text>
    }

    _sectionComp = (info) => {
        var txt = info.section.key;
        return <Text
            style={{ height: 50, textAlign: 'center', lineHeight: 50, backgroundColor: '#9CEBBC', color: 'white', fontSize: 30 }}>{txt}</Text>
    }
}

const styles = StyleSheet.create({
    list: {
        //justifyContent: 'space-around',
        flexDirection: 'row',//设置横向布局  
        flexWrap: 'wrap',  //设置换行显示
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF'
    },
});
import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TouchableNativeFeedback,
    TouchableHighlight,
    ToolbarAndroid,
} from 'react-native'

export default class TouchableOpacityDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Touch Here </Text>
                </TouchableOpacity>
                <TouchableHighlight
                    style={styles.button}
                    onPress={this.onPress}
                >
                    <Text> Touch Here </Text>
                </TouchableHighlight>

                <View style={[styles.countContainer]}>
                    <Text style={[styles.countText]}>
                        {this.state.count !== 0 ? this.state.count : null}
                    </Text>
                </View>

                <ToolbarAndroid
                    navIcon={require('../../assets/img/origin_heart.jpeg')}
                    title={this.state.actionText}
                    logo={require('../../assets/img/origin_heart.jpeg')}
                    style={{ height: 70, borderWidth: 2, borderColor: '#000', backgroundColor: 'goldenrod' }}
                    actions={[{ title: '菜单', icon: require('../../assets/img/origin_heart.jpeg'), show: 'never', showWithText: true },
                    { title: '菜单', icon: require('../../assets/img/origin_heart.jpeg'), show: 'ifRoom', showWithText: true },
                    { title: '功能1', show: 'always', showWithText: true }]}
                    onActionSelected={this.onActionSelected}
                    onIconClicked={() => this.setState({ actionText: this.state.actionText == '我是标题' ? '我是第二个标题' : '我是标题' })}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        marginBottom: 10,
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})
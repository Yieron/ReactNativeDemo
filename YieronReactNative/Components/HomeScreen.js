import React from "react";
import {
    View,
    Text,
    Button,
} from "react-native";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Welcome"
                    onPress={() => {
                        console.log('YINDONG:push')
                        this.props.navigation.push('Welcome')
                    }}
                />
                <Button
                    title="Go to Home"
                    onPress={() => {
                        console.log('YINDONG:navigate')
                        this.props.navigation.navigate('Home')
                    }}
                />
                <Button
                    title="Go back"
                    onPress={() => {
                        console.log('YINDONG:goBack')
                        this.props.navigation.goBack()
                    }}
                />
            </View>);
    }
}
//************************************************************************
//************************************************************************

//React Navigation 生命周期事件
/**
 * React Navigation 将事件发送到订阅了它们的页面组件：
 * 有4个不同的事件可供订阅：willFocus、willBlur、didFocus 和 didBlur
 */

//************************************************************************
//************************************************************************

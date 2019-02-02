import React from "react";
import {
    View,
    Text,
    Button,
    Platform,
} from "react-native";
import LogoTitle from "./LogoTitle";

export default class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            // title: 'Home',
            /**
             * 您可以通过navigationOptions中的headerLeft和headerRight属性在标题栏中设置按钮。
             * 后退按钮可以通过headerLeft完全自定义，
             * 但是如果你只想更改标题或图片，
             * 那么还有其他navigationOptions 
             * headerBackTitle，headerTruncatedBackTitle和headerBackImage
             */
            headerTitle: <LogoTitle />,
            headerRight: (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Button"
                    color={Platform.OS === 'ios' ? '#fff' : null}
                />
            ),
            headerBackTitle:'返回',
            headerTruncatedBackTitle:'',
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Button
                    title="Go to Welcome push"
                    onPress={() => {
                        console.log('YINDONG:push')
                        this.props.navigation.push('Welcome')
                    }}
                />
                <Button
                    title="Go to Welcome navigate"
                    onPress={() => {
                        console.log('YINDONG:navigate')
                        this.props.navigation.navigate('Welcome')
                    }}
                />
                <Button
                    title="Go back"
                    onPress={() => {
                        console.log('YINDONG:goBack')
                        this.props.navigation.goBack()
                    }}
                />
                <Button
                    title="Show Modal"
                    onPress={() => {
                        console.log('YINDONG:showModal')
                        this.props.navigation.push('MyModal')
                    }}
                />
                <Button
                    title="Go to Settings"
                    onPress={() => {
                        console.log('YINDONG:showModal')
                        this.props.navigation.push('Setting')
                    }}
                />
                <Button
                    title="Go to iphoneXSupportScreen navigate"
                    onPress={() => {
                        console.log('YINDONG:navigate')
                        this.props.navigation.navigate('iphoneXSupport')
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
